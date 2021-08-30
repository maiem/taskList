<style lang="scss" scoped>
.shop-page {
  padding-top: 100px;

  .page-left {
    h4.title {
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .category-bar {
      max-height: 300px;
      overflow-y: auto;

      li {
        display: flex;
        margin-top: 15px;

        label {
          display: inline-block;
          position: relative;
          cursor: pointer;
          font-size: 30px;
          user-select: none;
          padding-left: 20px;
          margin-right: 20px;
        }

        label input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          width: 18px;
          height: 18px;
          background: #fff;
          border: 1px solid #999;
          border-radius: 2px;
        }

        label:hover .checkmark {
          background: none;
        }

        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        label .checkmark:after {
          top: 50%;
          left: 50%;
          width: 9px;
          height: 12px;
          //border-radius: 50%;

          border: solid 2px #cd7752;
          border-left: none;
          border-top: none;
          transform: translate(-50%, -70%) rotate(45deg);
        }

        label input:checked ~ .checkmark {
          background: none;
          border: none;
        }

        label input:checked ~ .checkmark:after {
          display: block;
        }

        a {
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
          text-transform: capitalize;
          color: #000;

          &:hover {
            color: #cd7752;
          }
        }
      }
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
            transform: translate(70%, 40%);
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
</style>

<template>
  <section class="shop-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="page-left">
            <h4 class="title">danh mục</h4>

            <ul class="category-bar">
              <li v-for="dm in danhmuc" :key="dm.index">
                <label>
                  <input type="checkbox" class="cust-checkbox" />
                  <span class="checkmark"></span>
                </label>

                <a href="">
                  {{ dm.TenDM }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-10">
          <div class="page-right">
            <div class="row">
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                v-for="(product, index) in products"
                :key="index"
              >
                <div class="single-product-wrap">
                  <div class="product-image">
                    <a href="" class="pro-img">
                      <img
                        :src="require(`../assets/images/${product.HinhAnh}`)"
                      />
                      <!-- <img :src="'../assets/images/' + product.HinhAnh" /> -->
                      <!-- <img :src="product.HinhAnh" alt="Logo" /> -->
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
                    <h3>
                      <a href="">{{ product.TenSP }}</a>
                    </h3>

                    <div class="price-box">
                      <div class="new-price">
                        <span class="money">{{ product.Gia }} VND</span>
                      </div>
                    </div>
                  </div>
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
import axios from "axios";
//import api from "../service/api";
export default {
  name: "CuaHang",
  data() {
    return {
      products: [],
      danhmuc: [],
      loading: true,
      image: "",
    };
  },

  methods: {},

  created() {
    this.image = "";

    //lay danh sach sp
    axios
      .get("https://localhost:44302/api/SanPham/", {
        headers: {
          "Content-type": "image/jpeg",
        },
      })
      .then((response) => {
        this.products = response.data;
        this.image = "data:image/jpg;base64,".concat(
          this.image.concat(response.data)
        );
        console.log(this.products);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    //danh sách danh mục
    axios
      .get("https://localhost:44302/api/danhmuc/", {
        headers: {
          "Content-type": "image/jpeg",
        },
      })
      .then((response) => {
        this.danhmuc = response.data;
        console.log(this.danhmuc);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
