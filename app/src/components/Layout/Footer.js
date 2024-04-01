import React from 'react';
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory.js"

const AppFooter = () => {
  const categories = useCategory();
  return (
    <footer className="bg-dark text-light">
      <div className="container p-4">
        <section className="d-flex justify-content-center justify-content-lg-between border-bottom pb-4 mb-4">
          <div className="me-5 d-none d-lg-block">
            <span className="fs-5">Follow us on social media:</span>
          </div>

          <div>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="row mt-5">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
              <p>
                YourEcommerceApp is a leading online retailer offering a wide range of high-quality clothing and accessories for men, women, and kids.
              </p>
              <p>
                Our mission is to provide our customers with the best shopping experience possible, offering exceptional products at competitive prices.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Shop</h6>
              {categories.map((c) => (
                <div className="text-white" key={c._id}> {/* Add text-white class here */}
                  <div>
                    <Link to={`/category/${c.slug}`} className="text-white"> {/* Add text-white class here */}
                      {c.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>


            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Customer Service</h6>
              <p>
                <a href="#" className="text-reset">Contact Us</a>
              </p>
              <p>
                <a href="#" className="text-reset">Shipping Information</a>
              </p>
              <p>
                <a href="#" className="text-reset">Returns & Exchanges</a>
              </p>
              <p>
                <a href="#" className="text-reset">FAQ</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-2"></i>
                1234 Main St, City, Country
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +123 456 789
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-4 bg-secondary">
        © {new Date().getFullYear()} V shop. All rights reserved. Designed by Hapsha.
      </div>
    </footer>
  );
}

export default AppFooter;
