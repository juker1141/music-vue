<template>
  <div
    class="text-white text-center font-bold p-5 mb-4"
    v-if="loginShowAlert"
    :class="loginAlertVariant"
  >
    {{ loginAlertMsg }}
  </div>
  <!-- Login Form -->
  <VeeForm @submit="login" :validation-schema="loginSchema">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <VeeField
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <VeeField
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      :disabled="loginInSubmission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </VeeForm>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      loginSchema: {
        email: "required|email",
        password: "required|min:3|max:32",
      },
      loginInSubmission: false,
      loginShowAlert: false,
      loginAlertVariant: "bg-blue-500",
      loginAlertMsg: "Please wait! We are logging you in.",
    };
  },
  methods: {
    async login(values) {
      this.loginShowAlert = true;
      this.loginInSubmission = true;
      this.loginAlertVariant = "bg-blue-500";
      this.loginAlertMsg = "Please wait! We are logging you in.";

      // 嘗試登入 firebase
      try {
        await this.$store.dispatch("login", values);
      } catch (error) {
        // 失敗就顯示錯誤，並跳出流程
        this.loginInSubmission = false;
        this.loginAlertVariant = "bg-red-500";
        this.loginAlertMsg = "Invalid login details.";
        // 若 catch 沒有 return，會繼續執行下面的程式碼
        return;
      }

      // 成功就 reload page
      this.loginAlertVariant = "bg-green-500";
      this.loginAlertMsg = "Success! Your are now logged in.";
      window.location.reload();
    },
  },
};
</script>
