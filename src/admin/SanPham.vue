<template>
  <section class="manage-product">
    <div class="container">
      <div class="row pb-5 manage-header">
        <div class="col-10">
          <h2>Quản lí sản phẩm</h2>
        </div>

        <div class="col-2 text-align-end">
          <button
            class="btn btn-success"
            @click="isOpenCreateProduct = !isOpenCreateProduct"
          >
            Thêm sản phẩm
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 offset-md-3">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Mã</th>
                <th scope="col">Tên</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Giá</th>
                <th scope="col">Mô tả</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Danh mục</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="product in products" :key="product.index">
                <td>{{ product.MaSP }}</td>
                <td>{{ product.TenSP }}</td>
                <td>{{ product.HinhAnh }}</td>
                <td>{{ product.Gia }}</td>
                <td>{{ product.MoTa }}</td>
                <td>{{ product.SoLuong }}</td>
                <td>{{ product.MaDM }}</td>
                <td>
                  <button
                    class="btn btn-primary"
                    @click="isOpenEditProduct = !isOpenEditProduct"
                  >
                    Sửa
                  </button>

                  <button
                    class="btn btn-danger"
                    @click.prevent="deleteProduct(product.MaSP)"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Create product Modal -->
    <div v-if="isOpenCreateProduct" class="create-model pt-4">
      <div class="modal-wrapper">
        <form method="POST" v-on:submit.prevent="createProduct">
          <h4 class="modal-title">Thêm sản phẩm</h4>

          <div
            class="form-group mt-4"
            :class="{ 'has-error': errors.has('TenSP') }"
          >
            <label for="TenSP">Tên</label>
            <input
              type="text"
              name="TenSP"
              class="form-control"
              v-model="newProduct.TenSP"
            />

            <span v-show="errors.has('TenSP')" class="help-block">
              Tên không để trống
            </span>
          </div>

          <div
            class="form-group mt-4"
            :class="{ 'has-error': errors.has('Gia') }"
          >
            <label for="Gia">Giá</label>
            <input
              type="number"
              name="Gia"
              min="0"
              class="form-control"
              v-model="newProduct.Gia"
              v-validate
              data-rules="required|Gia:0"
            />

            <span v-show="errors.has('Gia')" class="help-block">
              Giá không để trống
            </span>
          </div>

          <div
            class="form-group mt-4"
            :class="{ 'has-error': errors.has('MoTa') }"
          >
            <label for="MoTa">Mô tả</label>
            <textarea
              name="MoTa"
              class="form-control"
              v-model="newProduct.MoTa"
            ></textarea>

            <span v-show="errors.has('MoTa')" class="help-block">
              Mô tả không để trống
            </span>
          </div>

          <div class="form-group mt-4">
            <label for="HinhAnh">Hình ảnh</label>
            <input type="file" name="HinhAnh" class="form-control" />
          </div>

          <div
            class="form-group mt-4"
            :class="{ 'has-error': errors.has('SoLuong') }"
          >
            <label for="SoLuong">Số lượng</label>
            <input
              type="number"
              min="1"
              name="SoLuong"
              class="form-control"
              v-validate
              data-rules="required|age:10"
            />

            <span v-show="errors.has('SoLuong')" class="help-block">
              Số lượng không để trống
            </span>
          </div>

          <div class="form-group mt-4">
            <label for="DanhMuc">Danh mục</label>
            <select v-model="products.MaDM">
              <option v-for="dm in danhmuc" :key="dm.MaDM" :value="dm.MaDM">
                {{ dm.TenDM }}
              </option>
            </select>
          </div>

          <div class="form-group mt-4">
            <button type="submit">
              Thêm sản phẩm
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Edit product Modal -->
    <div v-if="isOpenEditProduct" class="create-model pt-4">
      <div class="modal-wrapper">
        <div class="header-modal">
          <h4 class="modal-title">
            Sửa sản phẩm
          </h4>
        </div>

        <form method="POST" v-on:submit.prevent="createProduct">
          <div class="form-group mt-4">
            <label for="TenSP">Tên</label>
            <input
              type="text"
              name="TenSP"
              class="form-control"
              v-model="newProduct.TenSP"
            />

            <span v-if="newProduct.TenSP == ''" class="error text-danger">
              Nhập tên sản phẩm
            </span>
          </div>

          <div class="form-group mt-4">
            <label for="Gia">Giá</label>
            <input
              type="number"
              name="Gia"
              min="0"
              class="form-control"
              v-model="newProduct.Gia"
            />

            <span v-if="newProduct.Gia == ''" class="error text-danger">
              Nhập giá sản phẩm
            </span>
          </div>

          <div class="form-group mt-4">
            <label for="MoTa">Mô tả</label>
            <textarea
              name="MoTa"
              class="form-control"
              v-model="newProduct.MoTa"
            ></textarea>

            <span v-if="newProduct.MoTa == ''" class="error text-danger">
              Nhập mô tả sản phẩm
            </span>
          </div>

          <div class="form-group mt-4">
            <label for="HinhAnh">Hình ảnh</label>
            <input
              type="text"
              name="HinhAnh"
              class="form-control"
              v-model="newProduct.HinhAnh"
            />

            <span v-if="newProduct.HinhAnh == ''" class="error text-danger">
              Nhập hình ảnh sản phẩm
            </span>
          </div>

          <div class="form-group mt-4">
            <label for="SoLuong">Số lượng</label>
            <input type="number" min="1" name="SoLuong" class="form-control" />
          </div>

          <div class="form-group mt-4">
            <button
              type="submit"
              class="btn btn-success"
              @click.prevent="updateProduct(product)"
            >
              Sửa sản phẩm
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.manage-product {
  padding-top: 50px;

  .manage-header {
    z-index: -1;
    h2 {
      font-size: 23px;
      font-weight: 600;
    }

    button {
      width: 100%;
      border: 2px solid #cd7752;
      background: none;
      color: #cd7752;
      padding: 8px 18px;
      font-weight: 500;

      &:hover {
        background: rgba(245, 243, 243, 0.856);
      }

      &:focus {
        box-shadow: none;
      }
    }
  }

  table {
    z-index: -1;
    thead {
      font-size: 14px;
    }

    tbody {
      font-size: 14px;
      font-weight: 500;

      td {
        .btn {
          padding: 4px 12px;
          font-size: 13px;
          font-weight: 500;
          color: #fff;
          border: none;
        }

        .btn-primary {
          background: rgb(0, 119, 255);
        }

        .btn-danger {
          background: red;
          margin-left: 10px;
        }
      }
    }
  }

  .create-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    overflow-y: auto;
    z-index: 100;

    .modal-wrapper {
      background: #fff;
      width: 40%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 25px;

      form {
        .modal-title {
          text-align: start;
          text-transform: capitalize;
          font-size: 17px;
          font-weight: 700;
        }

        .form-group {
          label {
            font-size: 15px;
            color: #000;
            font-weight: 500;
          }

          input,
          textarea {
            box-shadow: none;
            padding: 6px;

            &:focus {
              box-shadow: none;
              border-color: #999;
            }
          }

          span.error {
            color: rgb(238, 185, 87);
            font-size: 13px;
            font-weight: 500;
          }

          button {
            padding: 6px 16px;
            color: #cd7752;
            background: none;
            font-size: 14px;
            font-weight: 500;
            padding: 10px 18px;
            border-radius: 4px;
            text-transform: capitalize;
            border: 2px solid #cd7752;
          }
        }
      }
    }
  }
}
</style>

<script>
import axios from "axios";

export default {
  name: "SanPham",
  data() {
    return {
      danhmuc: [],
      products: [],
      // formSubmitted: false,
      formErrorsUpdate: {},
      newProduct: {
        TenSP: "",
        Gia: "",
        HinhAnh: "",
        MoTa: "",
        SoLuong: "",
        TrangThai: "",
        LuotXem: "",
        MaDM: "",
      },
      fillProduct: {
        TenSP: "",
        Gia: "",
        HinhAnh: "",
        MoTa: "",
        SoLuong: "",
        TrangThai: "",
        LuotXem: "",
        MaDM: "",
      },
      loading: true,
      isOpenCreateProduct: false,
      isOpenEditProduct: false,
    };
  },

  methods: {
    createProduct() {
      axios
        .post("https://localhost:44302/api/SanPham/", this.newProduct)
        .then((response) => {
          this.products = response.data;
          console.log(this.products);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },

    deleteProduct(MaSP) {
      axios
        .delete("https://localhost:44302/api/SanPham/" + MaSP)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },

    editProduct(product) {
      this.fillProduct.TenSP = product.TenSP;
      this.fillProduct.Gia = product.Gia;
      this.fillProduct.HinhAnh = product.HinhAnh;
      this.fillProduct.MoTa = product.MoTa;
      this.fillProduct.SoLuong = product.SoLuong;
      this.fillProduct.MaDM = product.MaDM;
    },

    updateProduct(MaSP) {
      var input = this.fillProduct;

      axios
        .put("https://localhost:44302/api/SanPham/" + MaSP, input)
        .then((response) => {
          this.fillProduct = {
            TenSP: "",
            Gia: "",
            HinhAnh: "",
            MoTa: "",
            SoLuong: "",
            TrangThai: "",
            LuotXem: "",
            MaDM: "",
          };
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
  },

  mounted() {
    const url = "https://localhost:44302/api";

    //  get sản phẩm
    axios
      .get(url + "/SanPham")
      .then((response) => {
        this.products = response.data;
        console.log(this.products);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    //get danh muc
    axios
      .get(url + "/danhmuc")
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
