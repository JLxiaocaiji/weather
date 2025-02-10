<template>
  <div class="login-container">
    <div class="logo"></div>
    <div class="login-r">
      <div class="login-form">
        <h2>欢迎使用</h2>
        <h2>蓄电池管理系统</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">用户名</label>
            <a-input
              v-model="form.email"
              id="email"
              placeholder="请输入用户名"
            >
              <template #prefix>
                <user-outlined style="color: rgba(0, 0, 0, 0.45)"/>
              </template>
            </a-input>
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <a-input
              v-model="form.password"
              type="password"
              id="password"
              placeholder="请输入密码"
            >
              <template #prefix>
                <safety-outlined style="color: rgba(0, 0, 0, 0.45)"/>
              </template>
            </a-input>
          </div>
          <button type="submit" class="login-button">登录</button>
        </form>

        <div style="display: block; text-align: right">没有账号？ 去<a-button type="link" style="padding: unset">重置</a-button></div>
        <div style="display: block; text-align: right">没有密码？ 去<a-button type="link" style="padding: unset">重置</a-button></div>
      </div>
    </div>

    <div class="bottom">
      Copyright © 2018-2025 内蒙古建升电气工程有限公司 All Rights Reserved.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LoginForm } from '@/types';
import { UserOutlined, InfoCircleOutlined, SafetyOutlined } from '@ant-design/icons-vue';

// 使用ref创建响应式数据对象，用于存储表单数据
const form = ref<LoginForm>({
  username: '',
  password: '',
});

// 模拟登录函数，这里只是简单打印表单数据，实际要对接后端接口验证
const handleLogin = () => {
  if (form.value.username === '') {
    return;
  }
  if (form.value.password === '') {
    return;
  }
  console.log('登录信息：', form.value);
  // 这里可以添加实际的登录逻辑，比如发送axios请求到后端接口等
};
</script>

<style lang="less" scoped>
.login-container {

  .logo {
    position: absolute;
    width: 100px;
    height: 100px;
    margin-left: 10vw;
    margin-top: 8vh;
    background: url('@/assets/images/logo.png') 0 0 / 100% 100% no-repeat;
  }

  height: 100%;
  background-color: #f4f4f9;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // margin-left: -48%;
    content: '';
    background-image: url('@/assets/images/bg.jpg');
    // background-repeat: no-repeat;
    background-position: 100%;
    background-size: auto 100%;
  }

  .login-r {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    float: right;
  }

}


.login-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.login-form h2 {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
  color: #333;
  font-size: 1.875rem;
  font-weight: 700;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
}

.form-group input:focus {
  border-color: #007bff;
  outline: none;
}

.login-button {
  width: 100%;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.bottom {
  color: #fff;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 20px;
  line-height: 20px;
  bottom: 10px;
}
</style>