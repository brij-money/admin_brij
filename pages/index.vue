<template>
  <div class="main">
    <div
      class="section w-full min-h-screen flex flex-col justify-center gap-y-10 items-center"
    >
      <!-- form -->
      <div
        class="flex flex-col max-w-sm bg-white dark:bg-slate-900 dark:bg-opacity-50 px-10 py-10 ring-1 ring-slate-900/5 rounded-md"
      >
        <h2>Login</h2>
        <p>Sign in to dashboard with your provided email & password</p>
        <form @submit="onSubmit">
          <div class="flex flex-col gap-y-3 mt-10">
            <!-- email -->
            <MazInput
              v-model="email"
              color="warning"
              v-bind="emailAttrs"
              :hint="errors.email"
              :error="errors.password !== undefined"
              label="email"
            />
            <!-- password -->
            <MazInput
              v-model="password"
              color="warning"
              v-bind="passwordAttrs"
              :hint="errors.password"
              :error="errors.password !== undefined"
              label="password"
              type="password"
            />

            <!-- remember me -->
            <MazCheckbox
              v-model="rememberMe"
              size="xs"
              color="warning"
              class="dark:text-white"
              label="Remember me"
            />
            <!-- btn -->
            <MazBtn color="warning" :loading="btnLoading" @click="onSubmit">Log in</MazBtn>
          </div>
        </form>
      </div>

      <!-- logo -->
      <div class="logo w-fit h-fit px-10 py-3">
        <img
          v-if="$colorMode.preference === 'dark'"
          src="/assets/img/logo.svg"
          alt="logo"
        />
        <img v-else src="/assets/img/logo-dark.svg" alt="logo" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useForm } from 'vee-validate';
import {getMerchant} from '~/repository/module/merchant'
import * as yup from 'yup';


const { signIn} = useAuth();



// datas
const btnLoading = ref(false)

// Define the validation schema
const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  }),
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const rememberMe = ref(false);



// Creates a submission handler
const onSubmit = handleSubmit(async values => {
  console.log(values);
  logIn(values)
});


async function logIn(values:any){
  try {
    btnLoading.value = true;
      await signIn(values, {callbackUrl:'/dashboard/merchants'});
    btnLoading.value = false;

    ShowMessage('You have successfully sign into your dashboard', false)
  } catch (e:any) {
    btnLoading.value = false;

    ShowMessage(e.response._data.message, true)
    console.log(e.response._data.message);
  }
}

function $toast(arg0: string, arg1: { position: string; duration: number; type: string; }) {
  throw new Error('Function not implemented.');
}

definePageMeta({
    auth:{
      unauthenticated:true,
      navigateAuthenticatedTo:'/dashboard/merchants'
    }
})
</script>
<style scoped>
.main {
  background-image: url('../assets/img/patterns.svg');
  background-size: cover;
  background-position: center;
}

.logo {
  border-radius: 10px;
}
</style>
