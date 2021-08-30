<template>
  <section class="cart-page">
    <form action="" method="post">
      <div class="container">
        <div class="row cart-header">
          <div class="col-5">Sản phẩm</div>
          <div class="col-3">Giá tiền</div>
          <div class="col-2">Số lượng</div>
          <div class="col-2">Thành tiền</div>
        </div>

        <div class="row cart-item align-items-center">
          <div class="col-5">
            <div class="item-info">
              <div class="item-image">
                <img src="../assets/images/ga4.jpg" alt="" />
              </div>

              <div class="item-title">
                <span class="item-desc">
                  Gà rán chuẩn vị cùng nước sốt cay nồng.
                </span>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="item-price">
              <span>35000 VND</span>
            </div>
          </div>

          <div class="col-2">
            <div class="quantity-action mr-3">
              <div class="cart-plus-minus">
                <input type="number" value="1" class="qt" min="1" />
              </div>

              <div class="group-btn">
                <button class="update-wrap mr-2">Cập nhật</button>
                <button class="remove-wrap">Xóa</button>
              </div>
            </div>
          </div>

          <div class="col-2">
            <div class="total-price">
              <span class="total-price">35000 VND</span>
            </div>
          </div>
        </div>

        <div class="row cart-button">
          <div class="col-4">
            <button type="submit">Cập nhật giỏ hàng</button>
          </div>

          <div class="col-4">
            <router-link to="/cuahang">Tiếp tục mua hàng</router-link>
          </div>

          <div class="col-4"><a href="">Xóa giỏ hàng</a></div>
        </div>

        <div class="row cart-footer">
          <div class="col-6"></div>
          <div class="col-lg-6">
            <div class="total">
              <div class="sub-total mb-3">
                <strong>Tổng giá:</strong>
                <span>50000 VND</span>
              </div>

              <div class="ship-price mb-3">
                <strong>Phí vận chuyển:</strong>
                <span>30000 VND</span>
              </div>

              <div class="total-prod-price">
                <strong>Thành tiền:</strong>
                <span>50000 VND</span>
              </div>

              <div class="checkout">
                <router-link to="/dathang" class="checkout-btn">
                  Tiến hành đặt hàng
                  <font-awesome-icon icon="arrow-right" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.cart-page {
  padding-top: 100px;

  form {
    .cart-header {
      border-bottom: 1px solid #eee;
      font-size: 16px;
      font-weight: 600;
    }

    .cart-item {
      border-bottom: 1px solid #eee;
      padding: 20px 0;

      .item-info {
        display: flex;
        align-items: center;

        .item-image {
          width: 50%;
          img {
            max-width: 80%;
            // width: 40%;
            object-fit: contain;
          }
        }

        .item-title {
          font-size: 15px;
          padding-left: 25px;
          .item-desc {
            font-weight: 600;
            font-size: 16px;
            display: inline-block;
          }

          .prod-price {
            display: inline-block;
            color: #999;
            font-weight: 500;
          }
        }
      }

      .item-price {
        color: #999;
        font-size: 15px;
        font-weight: 500;
      }

      .quantity-action {
        .cart-plus-minus {
          display: flex;
          justify-content: space-between;
          align-items: center;

          input.qt {
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            width: 100px;
            height: 30px;
            border: 1px solid #999;
          }
        }

        .group-btn {
          button {
            padding-top: 10px;
            font-size: 14px;
            font-weight: 500;
            color: #cd7752;
            position: relative;

            &::before {
              content: "";
              width: 100%;
              height: 1px;
              background: #cd7752;
              position: absolute;
              bottom: 0;
            }
          }

          .remove-wrap {
            margin-left: 10px;
          }
        }
      }

      .total-price {
        color: #000;
        font-size: 15px;
        font-weight: 700;
      }
    }

    .cart-button {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      color: #cd7752;
      font-size: 15px;
      font-weight: 500;
      border-bottom: 1px solid #eee;

      button {
        color: #cd7752;
        position: relative;

        &::before {
          content: "";
          width: 100%;
          height: 1px;
          background: #cd7752;
          position: absolute;
          bottom: 0;
        }
      }

      a {
        display: inline-block;
        color: #cd7752;
        position: relative;

        &::before {
          content: "";
          width: 100%;
          height: 1px;
          background: #cd7752;
          position: absolute;
          bottom: 0;
        }
      }
    }

    .cart-footer {
      padding: 20px 0;

      .total {
        .sub-total,
        .ship-price,
        .total-prod-price {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          strong {
            text-transform: capitalize;
          }
          span {
            font-weight: 600;
          }
        }

        .checkout {
          padding-top: 25px;
          text-align: end;
          .checkout-btn {
            padding: 8px 16px;
            font-weight: 500;
            color: #cd7752;
            border: 2px solid #cd7752;
            background: none;
            border-radius: 4px;

            &:hover {
              background: rgba(196, 195, 195, 0.15);
              svg {
                transform: translateX(50%);
                transition: all 0.2s ease-in-out;
              }
            }

            svg {
              font-size: 12px;
              transition: all 0.2s ease-in-out;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "GioHang",
};
</script>
