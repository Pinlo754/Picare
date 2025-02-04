using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class HaravanController : ControllerBase
{
    private readonly HttpClient _httpClient;

    public HaravanController(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    [HttpGet("products")]
    public async Task<IActionResult> GetProducts()
    {
        var haravanApiUrl = "https://apis.haravan.com/com/products.json";
        _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer 1440F22D8A91C3B798FE1866243D5FF2488BA5D608416BE05B52FAE6B2B6A2C8");

        var response = await _httpClient.GetAsync(haravanApiUrl);

        if (response.IsSuccessStatusCode)
        {
            var result = await response.Content.ReadAsStringAsync();
            return Ok(result);
        }
        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadAsStringAsync();
            return StatusCode((int)response.StatusCode, $"Error: {error}");
        }


        return StatusCode((int)response.StatusCode, response.ReasonPhrase);
    }

    [HttpPost("proxy")]
    public async Task<IActionResult> ProxyRequest([FromBody] object payload)
    {
        var haravanApiUrl = "https://apis.haravan.com/com/orders.json";
        _httpClient.DefaultRequestHeaders.Add("Authorization", "Bearer your-access-token");

        var content = new StringContent(payload.ToString(), Encoding.UTF8, "application/json");
        var response = await _httpClient.PostAsync(haravanApiUrl, content);

        if (response.IsSuccessStatusCode)
        {
            var result = await response.Content.ReadAsStringAsync();
            return Ok(result);
        }

        return StatusCode((int)response.StatusCode, response.ReasonPhrase);
    }
}
