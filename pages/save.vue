<template>
  <div>
    <navbar :activePage="activePage" />
    <div class="container mt-4">
      <nav class="navTabs">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active w-50" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
            type="button" role="tab" aria-controls="nav-home" aria-selected="true">Tests</button>
          <button class="nav-link w-50" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
            type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Diagnosis</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <div v-if="testCounter == 0">
            <input type="text" placeholder="🔍 search" class="form-control mt-4 search rounded-4 pr-2">
            <!-- <div class="empty">
              <img src="@/assets/img/icons8-kawaii-folders-100 2.png" alt="" class="img-fluid">
              <p>This folder is empty</p>
            </div> -->
            <ul class="listTest">
              <li class="d-flex test">
                <img src="@/assets/img/imgSave.svg" class="img-fluid" alt="">
                <div>
                  <p>Test 1</p>
                  <span>3/10/2023</span>
                </div>
                <button class="btn float-right" @click.prevent="testCounter++">&gt;</button>
              </li>
              <li class="d-flex test">
                <img src="@/assets/img/imgSave.svg" class="img-fluid" alt="">
                <div>
                  <p>Test 1</p>
                  <span>3/10/2023</span>
                </div>
                <button class="btn float-right" @click.prevent="testCounter++">&gt;</button>
              </li>
              <li class="d-flex test">
                <img src="@/assets/img/imgSave.svg" class="img-fluid" alt="">
                <div>
                  <p>Test 1</p>
                  <span>3/10/2023</span>
                </div>
                <button class="btn float-right" @click.prevent="testCounter++">&gt;</button>
              </li>
              <li class="d-flex test">
                <img src="@/assets/img/imgSave.svg" class="img-fluid" alt="">
                <div>
                  <p>Test 1</p>
                  <span>3/10/2023</span>
                </div>
                <button class="btn float-right" @click.prevent="testCounter++">&gt;</button>
              </li>
            </ul>
          </div>
          <div v-if="testCounter == 1" class="shadow mt-4 rounded-4 py-4 testDetails">
            <div class="container text-center">
              <button class="btn float-left" @click.prevent="testCounter--"><i
                  class="fa-solid fa-arrow-left"></i></button>
              <h3>Test 1</h3>
              <img src="@/assets/img/box.png" alt="" class="img-fluid mt-2">
              <div class="section-title container w-75 m-auto mt-4 ">
                <h5 class="float-left m-0">You May Suffer From</h5>
                <p class="float-right m-0">3/10/2023</p>
                <div class="clear-both"></div>
              </div>
              <div class="details w-75 m-auto">
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed doeiusmod tempor sit amet
                </p>
              </div>
              <button class="btn btn-next w-50 m-auto mt-4" @click.prevent="testCounter++">Advanced Option</button>
            </div>

          </div>
          <div v-if="testCounter == 2" class="shadow mt-4 rounded-4 py-4 testDetails">
            <div class="container result text-center">
              <h3 class="text-black mb-3" style="font-weight: 600;">Advanced options </h3>
              <h5 class="text-left">
                <ul>
                  <li>Know which doctor to go to </li>
                  <li>Read you result with speech</li>
                </ul>
              </h5>
              <div class="btns d-flex align-items-end">
                <button class="btn btn-prev w-50 h-25" @click.prevent="testCounter--">Back to result</button>
                <img src="@/assets/img/bitcoin.png" class="img-fluid" alt="" width="200" height="200">
                <button class="btn btn-next w-50 h-25">Purchase for 99.9EGP </button>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <div v-if="diaCounter == 0">
            <input type="text" placeholder="🔍 search" class="form-control mt-4 search rounded-4 pr-2">
            <!-- <div class="empty">
              <img src="@/assets/img/icons8-kawaii-folders-100 2.png" alt="" class="img-fluid">
              <p>This folder is empty</p>
            </div> -->
            <ul class="listTest">
              <li class="d-flex test">
                <img src="@/assets/img/imgSave.svg" class="img-fluid" alt="">
                <div>
                  <p>Diagnosis 1</p>
                  <span>3/10/2023</span>
                </div>
                <button class="btn float-right" @click.prevent="diaCounter++">&gt;</button>
              </li>
              <li class="d-flex test">
                <img src="@/assets/img/imgSave.svg" class="img-fluid" alt="">
                <div>
                  <p>Diagnosis 1</p>
                  <span>3/10/2023</span>
                </div>
                <button class="btn float-right" @click.prevent="diaCounter++">&gt;</button>
              </li>
              <li class="d-flex test">
                <img src="@/assets/img/imgSave.svg" class="img-fluid" alt="">
                <div>
                  <p>Diagnosis 1</p>
                  <span>3/10/2023</span>
                </div>
                <button class="btn float-right" @click.prevent="diaCounter++">&gt;</button>
              </li>
              <li class="d-flex test">
                <img src="@/assets/img/imgSave.svg" class="img-fluid" alt="">
                <div>
                  <p>Diagnosis 1</p>
                  <span>3/10/2023</span>
                </div>
                <button class="btn float-right" @click.prevent="diaCounter++">&gt;</button>
              </li>
            </ul>
          </div>
          <div v-if="diaCounter == 1" class="shadow mt-4 rounded-4 py-4 testDetails">
            <div class="container text-center">
              <button class="btn float-left" @click.prevent="diaCounter--"><i class="fa-solid fa-arrow-left"></i></button>
              <h3>Diagnosis 1</h3>
              <div class="section-title container w-75 m-auto mt-4 ">
                <h5 class="float-left m-0">You May Suffer From</h5>
                <p class="float-right m-0">3/10/2023</p>
                <div class="clear-both"></div>
              </div>
              <div class="details w-75 m-auto">
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed doeiusmod tempor sit amet
                </p>
              </div>
              <div class="d-flex" style="justify-content: center;">
                <button class="btn btn-next w-25 m-auto" @click.prevent="diaCounter++">Advanced Option</button>
                <img src="@/assets/img/result1.png" class="img-fluid float-right" width="250" height="250px" alt="">
                <div class="clear-both"></div>
              </div>
            </div>

          </div>

          <div v-if="diaCounter == 2" class="shadow mt-4 rounded-4 py-4 testDetails">
            <div class="container result text-center">
              <h3 class="text-black mb-3" style="font-weight: 600;">Advanced options </h3>
              <h5 class="text-left">
                <ul>
                  <li>Know which doctor to go to </li>
                  <li>Read you result with speech</li>
                </ul>
              </h5>
              <div class="btns d-flex align-items-end">
                <button class="btn btn-prev w-50 h-25" @click.prevent="diaCounter--">Back to result</button>
                <img src="@/assets/img/bitcoin.png" class="img-fluid" alt="" width="200" height="200">
                <button class="btn btn-next w-50 h-25">Purchase for 99.9EGP </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testCounter: 0,
      diaCounter: 0,
      activePage: 'save'
    }
  },
}
</script>

<style></style>
