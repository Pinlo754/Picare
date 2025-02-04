using Azure.Core;
using Azure;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

public class CartController : ControllerBase
{
    [HttpPost("add-to-cart")]
    public IActionResult AddToCart([FromBody] AddToCartRequest request)
    {
        try
        {
            // Lấy giỏ hàng từ cookies
            var cart = GetCartFromCookies();

            // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
            var existingItem = cart.FirstOrDefault(item => item.Id == request.Id);

            if (existingItem != null)
            {
                // Nếu sản phẩm đã tồn tại, tăng số lượng
                existingItem.Quantity += request.Quantity;
            }
            else
            {
                // Nếu sản phẩm chưa tồn tại, thêm mới
                cart.Add(new CartItem
                {
                    Id = request.Id,
                    Quantity = request.Quantity
                });
            }

            // Lưu giỏ hàng vào cookies
            SaveCartToCookies(cart);

            return Ok(new
            {
                message = "Added to cart successfully",
                cart = cart
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    // API lấy giỏ hàng từ cookies
    [HttpGet("get-cart")]
    public IActionResult GetCart()
    {
        try
        {
            // Lấy giỏ hàng từ cookies
            var cart = GetCartFromCookies();

            if (cart.Count == 0)
            {
                return Ok(new { message = "Your cart is empty" });
            }

            return Ok(new { cart = cart });
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    private List<CartItem> GetCartFromCookies()
    {
        if (Request.Cookies.TryGetValue("cart", out var cartJson))
        {
            return JsonSerializer.Deserialize<List<CartItem>>(cartJson) ?? new List<CartItem>();
        }
        return new List<CartItem>();
    }

    private void SaveCartToCookies(List<CartItem> cart)
    {
        var cartJson = JsonSerializer.Serialize(cart);

        Response.Cookies.Append("cart", cartJson, new CookieOptions
        {
            MaxAge = TimeSpan.FromDays(1),
            HttpOnly = false, // Nếu bạn cần truy cập cookie từ frontend (JavaScript)
            SameSite = SameSiteMode.None, // Để cho phép cookie đi qua các domain khác
            Secure = true // Đảm bảo chỉ gửi qua HTTPS
        });
    }
}


public class AddToCartRequest
{
    public long Id { get; set; }       // ID sản phẩm
    public int Quantity { get; set; }  // Số lượng
}

// Model giỏ hàng
public class CartItem
{
    public long Id { get; set; }       // ID sản phẩm
    public int Quantity { get; set; }  // Số lượng
}
