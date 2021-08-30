<template>
  <section class="side-bar">
    <div id="wrapper">
      <!-- Sidebar -->
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li>
            <router-link to="/adminpage">
              <font-awesome-icon icon="home" aria-hidden="true" />
              <span>Trang chủ</span>
            </router-link>
          </li>

          <li>
            <router-link to="/quanlisanpham">
              <font-awesome-icon icon="bookmark" aria-hidden="true" />
              <span>Sản phẩm</span>
            </router-link>
          </li>

          <li>
            <router-link to="/quanlidanhmuc">
              <font-awesome-icon icon="address-book" aria-hidden="true" />
              <span>Danh mục</span>
            </router-link>
          </li>

          <li>
            <router-link to="/thongke">
              <font-awesome-icon icon="chart-bar" aria-hidden="true" />
              <span>Thống kê</span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h1>Simple Sidebar with header and footer</h1>
              <p>
                This template has a responsive menu toggling system. The menu
                will appear collapsed on smaller screens, and will appear
                non-collapsed on larger screens. When toggled using the button
                below, the menu will appear/disappear. On small screens, the
                page content will be pushed off canvas.
              </p>
              <p>
                Make sure to keep all page content within the
                <code>#page-content-wrapper</code>.
              </p>
              <a href="#menu-toggle" class="btn btn-default" id="menu-toggle"
                >Toggle Menu</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </section>
  <!-- /#wrapper -->
</template>

<style lang="scss" scoped>
#wrapper {
  padding-left: 0;
  // position: fixed;
  // left: 0;
  #sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 50px;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #000;

    .sidebar-nav {
      position: absolute;
      top: 0;
      width: 50px;
      margin: 0;
      padding: 0;
      list-style: none;

      .sidebar-brand {
        height: 65px;
        font-size: 18px;
        line-height: 60px;

        a {
          color: #999999;

          &:hover {
            color: #fff;
            background: none;
          }
        }
      }

      li a {
        width: 250px;
        display: block;
        text-decoration: none;
        color: #999999;
        padding: 10px 15px;

        &:hover {
          text-decoration: none;
          color: #fff;
          background: rgba(255, 255, 255, 0.2);
        }

        span {
          display: none;
        }
      }
    }
  }

  #page-content-wrapper {
    margin-left: 50px;
    width: calc(100% - 50px);
    position: absolute;
    padding: 15px;
  }

  &.toggled {
    padding-left: 250px;

    #sidebar-wrapper {
      width: 250px;

      .sidebar-nav li a {
        span {
          display: inline;
          margin-left: 15px;
        }
      }
    }

    #page-content-wrapper {
      width: 100%;
      position: absolute;
      margin-right: -250px;
      margin-left: 0;
    }
  }
}

@media (min-width: 768px) {
  #wrapper {
    padding-left: 250px;

    #sidebar-wrapper {
      width: 250px;

      .sidebar-nav li a {
        span {
          display: inline;
          margin-left: 15px;
        }
      }
    }

    #page-content-wrapper {
      width: 100%;
      padding: 20px;
      position: relative;
      margin-left: 0;
    }

    &.toggled {
      padding-left: 50px;

      #sidebar-wrapper {
        width: 50px;

        .sidebar-nav li a {
          width: inherit;
          span {
            display: none;
          }
        }
      }

      #page-content-wrapper {
        position: relative;
        margin-right: 0;
      }
    }
  }
}
</style>

<script>
export default {
  name: "SideBar",
};
</script>
