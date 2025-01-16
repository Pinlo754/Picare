import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
  return (
    <footer className="bg-[#E6F2F2] text-gray-700 p-6 text-sm space-y-6">

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Công ty TNHH Picare Việt Nam</h4>
        <a href="/" className="inline-block">
          <img
            src="//theme.hstatic.net/1000097940/1000899682/14/logo-footer.png?v=276"
            alt="Logo Picare Việt Nam"
            className="w-32 mx-auto"
          />
        </a>
        <p className="text-sm leading-relaxed mx-auto">
          Picare - Nhà phân phối sản phẩm cao cấp từ Châu Âu, nổi bật với danh mục độc quyền, mang đến giải pháp an toàn và chất lượng cho khách hàng.
        </p>
      </div>

      <div className="space-y-4">
        <p className="flex gap-2">
          <i className="fa fa-map-marker-alt"></i>
          <span>38/11 Nguyễn Giản Thanh, Phường 15, Quận 10, TP. Hồ Chí Minh</span>
        </p>
        <p className="flex gap-2">
          <i className="fa fa-mobile-alt"></i>
          <a href="tel:0918088123" className="">0918088123</a>
        </p>
        <p className="flex gap-2">
          <i className="fa fa-envelope"></i>
          <a href="mailto:cskh@picare.vn" className="">cskh@picare.vn</a>
        </p>
      </div>


      <div className="flex space-x-4">
        <a href="https://www.facebook.com/@PiCareShopDuocMyPhamCaoCap" target="_blank" rel="noopener noreferrer">
          <img src="//theme.hstatic.net/1000097940/1000899682/14/facebook.svg?v=276" className="w-8 h-8" />
        </a>
        <a href="https://zalo.me/1551837309126666824" target="_blank" rel="noopener noreferrer">
          <img src="//theme.hstatic.net/1000097940/1000899682/14/zalo.svg?v=276" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/picarevietnam/" target="_blank" rel="noopener noreferrer">
          <img src="//theme.hstatic.net/1000097940/1000899682/14/instagram.svg?v=276" className="w-8 h-8" />
        </a>
      </div>


      <div className="space-y-4">
        <p className="font-semibold">Sản phẩm độc quyền</p>
        <p className="font-semibold">Hỗ trợ khách hàng</p>
        <p className="font-semibold">Đăng ký nhận tin</p>


        <div className="flex border border-gray-300 rounded-lg overflow-hidden max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Nhập địa chỉ email"
            className="w-full p-2 outline-none"
          />
          <button className="bg-green-600 w-8 h-9"> </button>
        </div>

        <div>
          <a target="_blank" href="http://online.gov.vn/Home/WebDetails/69543" title="Logo bộ công thương">
            <img src="//theme.hstatic.net/1000097940/1000899682/14/logo_bct.png?v=276" width="200" height="76" alt="Logo bộ công thương" />
          </a>
        </div>

      </div>



      <div className="bg-footer-bottom copyright clearfix py-2">
        <div className="container">
          <div className="row">
            <div id="copyright" className=" col-xl-4 col-lg-12 col-md-12 col-xs-12 fot_copyright">
              <span className="wsp">
                © Bản quyền thuộc về
                <a href="https://shopduocmypham.com/" rel="nofollow" target="_blank">Picare</a> | Phân phối dược mỹ phẩm <a href="https://shopduocmypham.com/" rel="nofollow" title="Picare" target="_blank">hàng đầu tại Việt Nam</a>
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
