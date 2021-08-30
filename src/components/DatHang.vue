<template>
  <section class="checkout-page">
    <form action="post">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <h2 class="title mb-3">Đặt hàng</h2>

            <div class="form-group mb-4">
              <label class="form-label">Họ tên *</label>
              <input type="text" class="form-control" placeholder="Họ tên..." />
            </div>

            <div class="form-group mb-4">
              <label class="form-label">Địa chỉ *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Địa chỉ..."
              />
            </div>

            <div class="form-group mb-4">
              <label class="form-label">Số điện thoại... *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Số điện thoại..."
              />
            </div>

            <div class="event-btn">
              <router-link to="/cuahang" class="return-shop">
                Tiếp tục mua hàng
              </router-link>

              <button class="checkout-btn submit-btn">
                Đặt hàng
              </button>

              <router-link to="/giohang" class="return-cart">
                Quay lại giỏ hàng
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.checkout-page {
  padding-top: 50px;

  form {
    .title {
      text-align: center;
    }
    label {
      color: #000;
      font-weight: 500;
      font-size: 15px;
    }

    input {
      box-shadow: none;
      padding: 8px;
      &:focus {
        border-color: #999;
      }
    }

    ::placeholder {
      font-size: 14px;
    }

    .event-btn {
      display: flex;
      justify-content: space-between;
      .checkout-btn {
        color: #fff;
        background: #cd7752;
        padding: 8px 25px;
        border-radius: 4px;
        text-transform: capitalize;
        transition: all 0.2s ease-out;
        font-weight: 600;
        border: 2px solid #cd7752;

        &:hover {
          color: #cd7752;
          border: 2px solid #cd7752;
          background: none;
          transition: all 0.2s ease-out;
        }
      }

      .return-shop,
      .return-cart {
        font-size: 14px;
        font-weight: 500;
        color: #cd7752;
        text-decoration: underline;
      }
    }
  }
}
</style>
