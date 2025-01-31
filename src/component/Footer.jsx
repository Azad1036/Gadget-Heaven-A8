const Footer = () => {
  return (
    <div>
      <footer className=" bg-blue-50 p-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black">Gadget Heaven</h1>
          <p className="text-[#09080F99]">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr className="text-black my-5" />

        {/* Footer Text */}
        <div className="flex justify-around text-center">
          {/* Services Text */}
          <div>
            <h1 className="text-black font-bold">Services</h1>
            <div className="text-[#09080F99]">
              <p>Product Support</p>
              <p>Order Tracking</p>
              <p>Shipping & Delivery</p>
              <p>Returns</p>
            </div>
          </div>
          {/* About Us Text */}
          <div>
            <h1 className="text-black font-bold">About Us</h1>
            <div className="text-[#09080F99]">
              <p>About Us</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
          </div>
          {/* Legal Text */}
          <div>
            <h1 className="text-black font-bold">Legal</h1>
            <div className="text-[#09080F99]">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
