<template>
  <header id="header">
    <div class="header-main-area">
      <div class="container-fluid">
        <div class="header-main">
          <div class="logo header-element">
            <router-link to="/">
              <img src="logolight.png" alt="" />
            </router-link>
          </div>

          <div class="main-menu-area header-element">
            <nav class="main-navigation navbar-expand-xl">
              <div class="nav-collapse">
                <ul class="main-menu">
                  <li class="menu-link">
                    <router-link to="/" class="link-title">
                      <span>Trang chủ</span>
                    </router-link>
                  </li>

                  <li class="menu-link">
                    <router-link to="/cuahang" class="link-title">
                      <span>cửa hàng</span>
                    </router-link>
                  </li>

                  <li class="menu-link">
                    <router-link to="/adminpage" class="link-title">
                      <span>danh mục</span>
                    </router-link>
                  </li>

                  <li class="menu-link">
                    <router-link to="/blog" class="link-title">
                      <span>blogs</span>
                    </router-link>
                  </li>

                  <li class="menu-link">
                    <router-link to="/lienhe" class="link-title">
                      <span>liên hệ</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div class="right-block header-element">
            <ul class="shop-element">
              <li class="search-wrap ele-wrap">
                <div class="main-search-active">
                  <form
                    action=""
                    id="form-search-header"
                    method="get"
                    class="search-bar"
                  >
                    <input
                      type="text"
                      id="search"
                      class="input-text"
                      placeholder="Tìm kiếm..."
                      required
                      autocomplete="off"
                    />

                    <button class="search-btn" type="submit">
                      <font-awesome-icon icon="search" />
                    </button>
                  </form>
                </div>
              </li>

              <li class="user-wrap ele-wrap">
                <div class="st-user">
                  <router-link to="/dangnhap">
                    <font-awesome-icon icon="user" />
                  </router-link>
                </div>
              </li>

              <li class="cart-wrap ele-wrap">
                <div class="shopping-wrap">
                  <router-link to="/giohang">
                    <font-awesome-icon icon="shopping-bag" />
                    <span id="cart-total" class="bigcouter">0</span>
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
/* HEADER */
header {
  background: #fff;
  padding-top: 20px;
  z-index: 2;

  border-bottom: 1px solid #e2e2e2;
}

.header-main {
  display: flex;
}

.logo {
  width: 20%;
  padding-left: 30px;
}

.logo a img {
  width: 100%;
}

.main-menu-area {
  width: 45%;
}

.main-menu {
  display: flex;
}

.menu-link {
  padding: 20px 14px 8px;
}

.menu-link .link-title {
  text-transform: capitalize;
  color: #000;
  font-size: 16px;
  font-weight: 500;
}

.menu-link .link-title span {
  text-transform: capitalize;
  color: #000;
  font-size: 16px;
  font-weight: 500;
}

.menu-link .link-title:hover {
  color: #cd7752;
}

.right-block .shop-element {
  display: flex;
  justify-content: space-around;
}

.shop-element li {
  padding: 15px 14px 8px;
}

.shop-element li:last-child {
  margin-right: 0;
}

.search-wrap {
  width: 100%;
}

input.input-text {
  width: 100%;
  position: relative;
  border-radius: 50px;
  height: 45px;
  padding: 0 35px;
  font-weight: 400;
  border: 1px solid #e2e2e2;
}

.search-btn {
  position: absolute;
  right: 13%;
  height: 45px;
  padding: 0 22px;
  font-size: 18px;
  color: #222;
}

.search-btn svg {
  font-size: 20px;
  font-weight: 500;
}

.search-btn svg:hover {
  color: #cd7752;
}

.user-wrap svg {
  font-size: 25px;
  color: #000;
}

.user-wrap svg:hover {
  font-size: 25px;
  color: #cd7752;
}

.cart-wrap svg {
  font-size: 25px;
  color: #000;
  position: relative;
}

.cart-wrap svg:hover {
  color: #cd7752;
}

.cart-wrap span {
  font-size: 13px;
  font-weight: 600;
  background: #cd7752;
  border-radius: 100%;
  text-align: center;
  height: 20px;
  width: 20px;
  color: #fff;
  position: absolute;
  top: 4%;
  right: 5%;
}
</style>
