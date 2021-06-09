<template>
  <div class="todo">
    <div class="container">
      <div class="row header">
        <div class="col-sm-12">
          <div class="header-title">
            <h1>hi, maiem !</h1>
          </div>
        </div>
      </div>
      <!--header-->

      <div class="row header-input">
        <div class="col-sm-8 col-md-8 col-lg-8">
          <form>
            <input type="text" v-model="newTask" placeholder="new task ..." />

            <button type="submit" id="add-task" @click="addTask()">
              <i class="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-4">
          <div class="image">
            <img src="../assets/images/cactus.png" alt="" />
          </div>
        </div>
      </div>
      <!--header-input-->

      <div class="row header-todo">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <h2>maiem'tasks</h2>

          <ul>
            <li
              v-for="(task, index) in tasks"
              v-bind:key="index"
              v-bind:class="{ done: task.done }"
            >
              <form>
                <input type="checkbox" v-model="task.done" />

                <label>
                  {{ task.content }}
                </label>
              </form>

              <div class="btn-list">
                <button id="edit" @click="editTask()">
                  <i class="far fa-edit"></i>
                </button>

                <button id="delete" @click="deleteTask()">
                  <i class="fas fa-minus-circle"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- header-todo-->
    </div>
    <!-- container-->
  </div>
</template>

<script>
export default {
  name: "ToDoList",

  data() {
    return {
      newTask: "",
      tasks: [
        { content: "vuejs", done: false },
        { content: "thuong mai dien tu", done: false },
        { content: "bug", done: false },
        { content: "error", done: false },
      ],
    };
  },

  methods: {
    addTask() {
      if (this.newTask.length > 0) {
        this.tasks.push({
          content: this.newTask,
          done: false,
        });
      }

      this.newTask = "";
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    doneTask(index) {
      if (this.done.tasks !== false) {
        this.deleteTask(index);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_reset.scss";
@import "../assets/scss/_media.scss";
@import "../assets/scss/_grid.scss";

.todo {
  margin: 20px 0;
  .container {
    .header {
      .col-sm-12 {
        .header-title {
          text-align: center;

          h1 {
            text-transform: capitalize;
            font-size: 25px;
            font-weight: 500;
            letter-spacing: 4px;
          }
        }
      }
    }

    .header-input {
      margin: 30px 0;
      background: #cee5d0;
      border-radius: 8px 28px;

      .col-sm-8 {
        position: relative;

        form {
          position: absolute;
          top: 50%;
          left: 10%;

          transform: translateY(-50%);
          width: 100%;

          input {
            width: 80%;
            height: 40px;
            padding: 20px;
            background: white;

            border-top-left-radius: 28px;
            border-bottom-left-radius: 28px;

            &::placeholder {
              text-align: start;
              text-transform: capitalize;
            }
          }

          button {
            width: 50px;
            height: 40px;
            border-top-right-radius: 28px;
            border-bottom-right-radius: 28px;

            background: #ffc947;

            i {
              font-weight: 600;
              transition: all 0.2s ease-in-out;
            }

            &:hover {
              i {
                transform: translateX(5px);
                transition: all 0.3s ease-in-out;
              }
            }
          }
        }
      }

      .col-sm-4 {
        .image {
          img {
            width: 50%;
          }
        }
      }
    }

    .header-todo {
      margin: 30px 0;

      .col-sm-12 {
        h2 {
          padding: 20px 0;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: capitalize;
          text-align: center;
        }

        ul {
          li {
            background: #ffc947;
            padding: 5px 0;
            margin-bottom: 10px;
            display: flex;
            position: relative;

            form {
              input[type="checkbox"] {
                width: 17px;
                height: 17px;
                margin-left: 10px;
              }

              label {
                padding-left: 20px;
              }
            }

            .btn-list {
              position: absolute;
              right: 10px;

              button {
                width: 20px;
                height: 20px;

                i {
                  font-size: 17px;
                }
              }

              #edit {
                i {
                  color: #6ba570;
                }
              }

              #delete {
                i {
                  color: rgba(221, 19, 19, 0.904);
                }
              }
            }
          }

          .done {
            display: none;
          }
        }
      }
    }
  }
}
</style>
