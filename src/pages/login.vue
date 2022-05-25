<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户登录</span>
      </div>
      <div class="userInfoList">
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormS" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="togo" @click="submitForm('ruleFormS')">登录</div>
    </el-card>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Axios.get('http://127.0.0.1:4000/login', {
            params: {
              name: that.ruleForm.name,
              password: that.ruleForm.password,
            }
          }).then((res) => {
            console.log(res.data);
            if (res.data.status == 0) {
              sessionStorage.setItem('token', res.data.token)
              that.$router.push({ path: '/index' })
            }

          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style>
.box-card {
  width: 400px;
  background-color: pink;
  margin: auto;
  margin-top: 200px;
  text-align: center;
}

.demo-ruleForm {
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.togo {
  margin-top: 20px;
  width: 200px;
  height: 30px;
  margin-left: 100px;
  background-color: orange;
  line-height: 30px;
}
</style>
