<template>
    <div class=" main">
        <div class="section w-full min-h-screen flex flex-col justify-center gap-y-10 items-center ">
            <!-- form -->
            <div class=" flex flex-col max-w-sm   bg-white dark:bg-slate-900  dark:bg-opacity-50  px-10 py-10 ring-1 ring-slate-900/5 rounded-md">

                <h2>Login</h2>
                <p>Sign in to dashboard with your provided email & password</p>

                <form @submit="onSubmit">

                <div class="flex flex-col gap-y-3 mt-10">
                    
                    <!-- email -->
                    <MazInput v-model="email" color="warning" v-bind="emailAttrs" :hint="errors.email" :error="errors.password !== undefined" label="email"  />
                    <!-- password -->
                    <MazInput v-model="password"  color="warning"  v-bind="passwordAttrs" :hint="errors.password" :error="errors.password !== undefined" label="password" type="password" />

                    <!-- remember me -->
                    <MazCheckbox v-model="rememberMe" size="xs" color="warning" label="Remember me" />
                    <!-- btn -->
                    <MazBtn color="warning" @click="onSubmit">Log in</MazBtn>

                </div>

            </form>

            </div>

            <!-- logo -->
            <div class="logo w-fit h-fit px-10 py-3">
                <img v-if="$colorMode.preference === 'dark'" src="/assets/img/logo.svg" alt="logo">
                <img v-else src="/assets/img/logo-dark.svg" alt="logo">
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';


// Define the validation schema
const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  }),
})

// Creates a submission handler
const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

// Define fields
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');




const rememberMe = ref(false)
</script>
<style scoped>
.main {
    background-image: url('../assets/img/patterns.svg');
    background-size: cover;
    background-position: center;
}

.logo{
    border-radius: 10px;
}
</style>