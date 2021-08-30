<template>
  <section class="blog-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="blogs-title">Blogs</h2>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
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
                <a href=""
                  >Đọc thêm
                  <font-awesome-icon icon="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
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
                <a href=""
                  >Đọc thêm
                  <font-awesome-icon icon="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div class="blog-item">
            <div class="blog-image">
              <a href="" class="blog-img">
                <img src="../assets/images/blog5.jpg" alt="" />
              </a>
            </div>

            <div class="blog-content">
              <h3 class="blog-title mt-2"><a href="">Bánh socola</a></h3>

              <p class="blog-desc mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                perspiciatis nobis necessitatibus voluptatum aut repudiandae
                doloribus quisquam mollitia suscipit. Eum impedit accusantium
                maxime facilis, voluptas molestias id? Error, assumenda porro?
              </p>

              <div class="blog-view mt-2">
                <a href=""
                  >Đọc thêm
                  <font-awesome-icon icon="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
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
                <a href=""
                  >Đọc thêm
                  <font-awesome-icon icon="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
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
                <a href=""
                  >Đọc thêm
                  <font-awesome-icon icon="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
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
                <a href=""
                  >Đọc thêm
                  <font-awesome-icon icon="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog-page {
  padding-top: 50px;
  .blogs-title {
    text-align: center;
    font-weight: 600;
    padding-bottom: 25px;
  }

  .blog-item {
    padding-top: 20px;
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
</style>
