<template>
  <section class="manage-category">
    <div class="container">
      <div class="row pb-5 manage-header">
        <div class="col-10">
          <h2>Quản lí danh mục</h2>
        </div>

        <div class="col-2 text-align-end">
          <button class="btn btn-success" @click="isOpen = !isOpen">
            Thêm danh mục
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Mã</th>
                <th scope="col">Tên</th>
                <th scope="col">Mô tả</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="dm in danhmuc" :key="dm.index">
                <td>{{ dm.MaDM }}</td>
                <td>{{ dm.TenDM }}</td>
                <td>{{ dm.MoTa }}</td>
                <td>
                  <button class="btn btn-primary">
                    Sửa
                  </button>

                  <button
                    class="btn btn-danger"
                    @click.prevent="deleteDanhMuc(dm.MaDM)"
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

    <!-- Create Item Modal -->
    <div v-if="isOpen" class="create-model pt-4">
      <div class="modal-wrapper">
        <form method="POST" v-on:submit.prevent="createDanhMuc">
          <h4 class="modal-title">
            Thêm danh mục
          </h4>

          <div class="form-group mt-4">
            <label for="TenSP">Tên</label>
            <input
              type="text"
              name="TenDM"
              class="form-control"
              v-model="newDanhMuc.TenDM"
            />

            <span v-if="formErrors.length > 0" class="error text-danger">
              {{ formErrors[1] }}
            </span>
          </div>

          <div class="form-group mt-4">
            <label for="MoTa">Mô tả</label>
            <textarea
              name="MoTa"
              class="form-control"
              v-model="newDanhMuc.MoTa"
            ></textarea>

            <span v-if="formErrors.length > 0" class="error text-danger">
              {{ formErrors[2] }}
            </span>
          </div>

          <div class="form-group mt-4">
            <button type="submit" class="btn btn-create">
              Tạo danh mục
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.manage-category {
  padding-top: 50px;

  .manage-header {
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
    position: fixed !important;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    overflow-y: auto;

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

          .error {
            color: rgb(241, 104, 104);
            font-size: 13px;
            font-weight: 500;
          }

          button {
            padding: 8px;
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
  data() {
    return {
      danhmuc: [],
      sanpham: [],
      formErrors: [],
      formErrorsUpdate: {},
      newDanhMuc: {
        TenDM: "",
        MoTa: "",
      },
      fillDanhMuc: {
        TenDM: "",
        MoTa: "",
        TrangThai: "",
      },
      isOpen: false,
      loading: true,
    };
  },

  mounted() {
    const url = "https://localhost:44302/api";
    //  GET
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

    //sanpham
    axios
      .get(url + "/SanPham")
      .then((response) => {
        this.sanpham = response.data;
        console.log(this.sanpham);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },

  methods: {
    // thêm danh mục
    createDanhMuc(e) {
      if (this.newDanhMuc.TenDM && this.newDanhMuc.MoTa) {
        axios
          .post("https://localhost:44302/api/danhmuc/", this.newDanhMuc)
          .then((response) => {
            this.danhmuc = response.data;
            console.log(this.danhmuc);
          })
          .catch((error) => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => (this.loading = false));

        alert("Thêm thành công");
        console.log("Thêm thành công");
      }

      if (!this.newDanhMuc.TenDM && !this.newDanhMuc.MoTa) {
        this.formErrors.push("Bạn cần điền đủ thông tin");
      }

      if (!this.newDanhMuc.TenDM) {
        this.formErrors.push("Tên danh mục không để trống");
      }

      if (!this.newDanhMuc.MoTa) {
        this.formErrors.push("Mô tả không để trống");
      }

      e.prevenDefault();
    },

    // xóa danh mục
    deleteDanhMuc(MaDM) {
      axios
        .delete("https://localhost:44302/api/danhmuc/" + MaDM)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
