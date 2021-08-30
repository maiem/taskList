<template>
  <section class="shopify-section">
    <div class="slide-content">
      <div class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/images/slide1.jpg" />
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/images/slide2.jpg" />
          </div>
        </div>
      </div>
    </div>

    <div class="service-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 center-col">
            <ul class="single-service">
              <li class="service-content">
                <div class="icon-block">
                  <a href="">
                    <img src="../assets/images/service2.png" alt="" />
                  </a>
                </div>

                <div class="service-text mt-3">
                  <span>Thức uống đặc biệt</span>
                  <p>cung cấp theo yêu cầu</p>
                </div>
              </li>

              <li class="service-content">
                <div class="icon-block">
                  <a href="">
                    <img src="../assets/images/service1.png" alt="" />
                  </a>
                </div>

                <div class="service-text mt-3">
                  <span>Đặt bàn tiện lợi</span>
                  <p>hoàn tiền nhanh chóng</p>
                </div>
              </li>

              <li class="service-content">
                <div class="icon-block">
                  <a href="">
                    <img src="../assets/images/service3.png" alt="" />
                  </a>
                </div>

                <div class="service-text mt-3">
                  <span>Phục vụ nhiệt tình</span>
                  <p>sẵn sàng phục vụ</p>
                </div>
              </li>

              <li class="service-content">
                <div class="icon-block">
                  <a href="">
                    <img src="../assets/images/service4.png" alt="" />
                  </a>
                </div>

                <div class="service-text mt-3">
                  <span>Thực phẩm đa dạng</span>
                  <p>đảm bảo chất lượng</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-category">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="outsite-box">
              <div class="category-item">
                <a
                  href=""
                  class="category-image"
                  :style="{
                    'background-image': `url(${require('../assets/images/cat1.png')})`,
                  }"
                >
                  <div class="cat-content">
                    <span class="cat-title">bữa tối</span>
                    <h3>french <span>fries</span></h3>
                  </div>
                </a>
              </div>

              <div class="category-item">
                <a
                  href=""
                  class="category-image"
                  :style="{
                    'background-image': `url(${require('../assets/images/cat2.png')})`,
                  }"
                >
                  <div class="cat-content">
                    <span class="cat-title">bữa trưa</span>
                    <h3>chicken <span>box</span></h3>
                  </div>
                </a>
              </div>

              <div class="category-item">
                <a
                  href=""
                  class="category-image"
                  :style="{
                    'background-image': `url(${require('../assets/images/cat3.png')})`,
                  }"
                >
                  <div class="cat-content">
                    <span class="cat-title">khai vị</span>
                    <h3>combo <span>starters</span></h3>
                  </div>
                </a>
              </div>

              <div class="category-item">
                <a
                  href=""
                  class="category-image"
                  :style="{
                    'background-image': `url(${require('../assets/images/cat4.png')})`,
                  }"
                >
                  <div class="cat-content">
                    <span class="cat-title">bữa sáng</span>
                    <h3>hot <span>burger</span></h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="product-tab-recomment">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-12">
            <div class="section-title">
              <span class="sub-title">Sản phẩm</span>
              <h2>
                <span>Top bán chạy</span>
              </h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="single-product-wrap">
              <div class="product-image">
                <a href="" class="pro-img">
                  <img src="../assets/images/ga4.jpg" alt="" />
                </a>

                <div class="product-label">
                  <span class="new-title"></span>
                </div>

                <div class="product-action">
                  <a href="" class="add-to-cart">
                    <font-awesome-icon icon="shopping-bag" />
                  </a>
                </div>
              </div>

              <div class="product-content">
                <h3><a href="">gà bơ tỏi</a></h3>

                <div class="price-box">
                  <div class="new-price">
                    <span class="money">35000 VND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="single-product-wrap">
              <div class="product-image">
                <a href="" class="pro-img">
                  <img src="../assets/images/pizza1.jpg" alt="" />
                </a>

                <div class="product-label">
                  <span class="new-title"></span>
                </div>

                <div class="product-action">
                  <a href="" class="add-to-cart">
                    <font-awesome-icon icon="shopping-bag" />
                  </a>
                </div>
              </div>

              <div class="product-content">
                <h3><a href="">gà bơ tỏi</a></h3>

                <div class="price-box">
                  <div class="new-price">
                    <span class="money">35000 VND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="single-product-wrap">
              <div class="product-image">
                <a href="" class="pro-img">
                  <img src="../assets/images/ga3.jpg" alt="" />
                </a>

                <div class="product-label">
                  <span class="new-title"></span>
                </div>

                <div class="product-action">
                  <a href="" class="add-to-cart">
                    <font-awesome-icon icon="shopping-bag" />
                  </a>
                </div>
              </div>

              <div class="product-content">
                <h3><a href="">gà bơ tỏi</a></h3>

                <div class="price-box">
                  <div class="new-price">
                    <span class="money">35000 VND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="single-product-wrap">
              <div class="product-image">
                <a href="" class="pro-img">
                  <img src="../assets/images/pizza4.jpg" alt="" />
                </a>

                <div class="product-label">
                  <span class="new-title"></span>
                </div>

                <div class="product-action">
                  <a href="" class="add-to-cart">
                    <font-awesome-icon icon="shopping-bag" />
                  </a>
                </div>
              </div>

              <div class="product-content">
                <h3><a href="">gà bơ tỏi</a></h3>

                <div class="price-box">
                  <div class="new-price">
                    <span class="money">35000 VND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-wrap">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="section-title">
              <span class="sub-title">tin tức</span>

              <h2><span>Tình yêu ẩm thực</span></h2>
            </div>
          </div>
        </div>

        <div class="row blog-list">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="blog-item">
              <div class="blog-image">
                <a href="" class="blog-img">
                  <img src="../assets/images/blog1.jpg" alt="" />
                </a>
              </div>

              <div class="blog-content">
                <h3 class="blog-title mt-2"><a href="">công thức bánh</a></h3>

                <p class="blog-desc mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  perspiciatis nobis necessitatibus voluptatum aut repudiandae
                  doloribus quisquam mollitia suscipit. Eum impedit accusantium
                  maxime facilis, voluptas molestias id? Error, assumenda porro?
                </p>

                <div class="blog-view mt-2">
                  <router-link to="/blog">
                    Đọc thêm
                    <font-awesome-icon icon="arrow-right" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="blog-item">
              <div class="blog-image">
                <a href="" class="blog-img">
                  <img src="../assets/images/blog4.jpg" alt="" />
                </a>
              </div>

              <div class="blog-content">
                <h3 class="blog-title mt-2"><a href="">công thức burger</a></h3>

                <p class="blog-desc mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  perspiciatis nobis necessitatibus voluptatum aut repudiandae
                  doloribus quisquam mollitia suscipit. Eum impedit accusantium
                  maxime facilis, voluptas molestias id? Error, assumenda porro?
                </p>

                <div class="blog-view mt-2">
                  <router-link to="/blog">
                    Đọc thêm
                    <font-awesome-icon icon="arrow-right" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="blog-item">
              <div class="blog-image">
                <a href="" class="blog-img">
                  <img src="../assets/images/blog3.jpg" alt="" />
                </a>
              </div>

              <div class="blog-content">
                <h3 class="blog-title mt-2"><a href="">sandwich chuẩn Ý</a></h3>

                <p class="blog-desc mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  perspiciatis nobis necessitatibus voluptatum aut repudiandae
                  doloribus quisquam mollitia suscipit. Eum impedit accusantium
                  maxime facilis, voluptas molestias id? Error, assumenda porro?
                </p>

                <div class="blog-view mt-2">
                  <router-link to="/blog">
                    Đọc thêm
                    <font-awesome-icon icon="arrow-right" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="blog-item">
              <div class="blog-image">
                <a href="" class="blog-img">
                  <img src="../assets/images/blog2.jpg" alt="" />
                </a>
              </div>

              <div class="blog-content">
                <h3 class="blog-title mt-2"><a href="">khoai tây chiên</a></h3>

                <p class="blog-desc mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  perspiciatis nobis necessitatibus voluptatum aut repudiandae
                  doloribus quisquam mollitia suscipit. Eum impedit accusantium
                  maxime facilis, voluptas molestias id? Error, assumenda porro?
                </p>

                <div class="blog-view mt-2">
                  <router-link to="/blog">
                    Đọc thêm
                    <font-awesome-icon icon="arrow-right" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TrangChu",
  data() {
    return {};
  },

  method: {
    useOwlCarousel: function() {
      ".slide".owlCarousel({
        loop: true,
        autoPlay: true,
        autoplayTimeout: 900,
        items: 1,
      });
    },
  },

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shopify-section {
  .service-area {
    .single-service {
      display: flex;
      margin-right: -30px;
      margin-top: -60px;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      z-index: 2;

      .service-content {
        background: #fff;
        border-radius: 4px;
        margin-right: 20px;
        padding: 30px;
        box-shadow: 0 0 15px rgb(0 0 0 / 8%);
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: translateY(-10px);
          transition: all 0.2s ease-in-out;
        }

        .service-text {
          span {
            font-weight: 600;
          }

          p {
            font-size: 13px;
            color: #999;
            text-transform: capitalize;
          }

          a {
            background-image: url("../assets/images/service1.png");
          }
        }
      }
    }
  }

  .slide-category {
    background-color: #ffffff;
    overflow-x: hidden;
    padding-top: 100px;
    padding-bottom: 0px;

    .outsite-box {
      display: flex;
      align-items: center;
      justify-content: center;

      .category-item {
        .category-image {
          cursor: pointer;
          background-repeat: no-repeat;
          background-position: left 100% bottom;
          width: 420px;
          height: 240px;
          display: flex;
          align-items: center;

          .cat-content {
            max-width: 150px;
            transform: translateX(60px);
            .cat-title {
              color: #cd7752;
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase;
            }

            h3 {
              font-size: 28px;
              line-height: 1.2;
              font-weight: 400;
              letter-spacing: 2px;
              margin-top: 16px;
              text-transform: capitalize;
              color: #000;

              span {
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }

  .product-tab-recomment {
    text-align: center;
    padding-top: 100px;
    padding-bottom: 0;

    .section-title {
      .sub-title {
        color: #cd7752;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 500;
        line-height: 1;
        margin-bottom: 10px;
      }

      h2 {
        color: #333;
        letter-spacing: 0;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 30px;
        //position: relative;
        text-transform: capitalize;
        text-decoration: none;
        line-height: 1;
      }
    }

    .single-product-wrap {
      padding-bottom: 25px;

      .product-image {
        position: relative;

        .pro-img {
          overflow: hidden;

          img {
            width: 90%;
            transition: all 0.5s ease-in-out;
            vertical-align: middle;
          }

          &:hover {
            img {
              transform: scale(1.05);
              transition: all 0.5s ease-in-out;
            }
          }
        }

        .product-action {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);

          &:hover {
            .add-to-cart {
              background: #cd7752;
              transition: all 0.4s ease-in;
              svg {
                color: #fff;
              }
            }
          }

          .add-to-cart {
            width: 35px;
            height: 35px;
            background: #fff;
            border-radius: 50%;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease-in;

            svg {
              font-size: 16px;
              font-weight: 400;
              color: #000;
              transform: translateY(40%);
            }
          }
        }

        &:hover {
          transition: all 0.4s ease-in;
          .add-to-cart {
            opacity: 1;
            visibility: visible;
            transition: all 0.4s ease-in;
          }
        }
      }

      .product-content {
        text-align: center;
        h3 {
          font-size: 15px;
          font-weight: 500;
          text-transform: capitalize;

          a {
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            color: #000;
            transition: all 0.2s ease-in;
          }
        }

        .price-box {
          .new-price {
            color: #000;
            font-size: 14px;
            font-weight: 600;
          }
        }

        &:hover {
          h3 {
            a {
              color: #cd7752;
              transition: all 0.2s ease-in;
            }
          }
        }
      }
    }
  }

  .blog-wrap {
    padding-top: 100px;
    padding-bottom: 0;

    .section-title {
      text-align: center;
      .sub-title {
        color: #cd7752;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 500;
        line-height: 1;
        margin-bottom: 10px;
      }

      h2 {
        color: #333;
        letter-spacing: 0;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 30px;
        //position: relative;
        text-transform: capitalize;
        text-decoration: none;
        line-height: 1;
      }
    }

    .blog-item {
      .blog-image {
        position: relative;

        .blog-img {
          overflow: hidden;

          img {
            width: 95%;
            transition: all 0.3s ease-in-out;
            vertical-align: middle;
          }

          &:hover {
            img {
              transform: scale(1.05);
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }

      .blog-content {
        .blog-title {
          font-size: 16px;
          font-weight: 600;
          text-transform: capitalize;

          a {
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            color: #000;
            transition: all 0.2s ease-in;
          }
        }

        .blog-desc {
          font-size: 13px;
          line-height: 2;
          font-weight: 500;
          color: #999;
          white-space: pre-wrap;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        }

        &:hover {
          .blog-title {
            a {
              color: #cd7752;
              transition: all 0.2s ease-in;
            }
          }
        }

        .blog-view {
          a {
            font-size: 14px;
            color: #cd7752;
            font-weight: 500;

            svg {
              font-size: 12px;
              transition: all 0.2s ease-in-out;
            }
          }

          &:hover {
            svg {
              transform: translateX(50%);
              transition: all 0.2s ease-in-out;
            }
          }
        }
      }
    }
  }
}
</style>
