<template>
    <div class="p-box">
        <el-header class="f14">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/program/detail' }">项目详情</el-breadcrumb-item>
                <el-breadcrumb-item>添加项目</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main>
            <el-form ref="addform" label-position="left" :rules="proRules" :model="programData" label-width="80px">
                <el-form-item label="项目名称" prop="name">
                    <el-input v-model="programData.name" style="width:300px" :clearable="true"></el-input>
                </el-form-item>
                <el-form-item label="项目类型" prop="type">
                    <el-select v-model="programData.type" placeholder="请选择项目类型">
                        <el-option label="通用应用" value="univeral-app"></el-option>
                        <el-option label="通用组件" value="univeral-component"></el-option>
                        <el-option label="通用node服务器" value="univeral-node"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="项目地址" prop="originUrl">
                    <el-input v-model="programData.originUrl" style="width:600px" :clearable="true"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="desc">
                    <el-input type="textarea" v-model="programData.desc" style="width:600px" :clearable="true"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addPro('addform')">立即创建</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </div>
</template>
<script>
    import Bus from '@Tool/bus'
    import api from '@Asset/api'
    export default {
        data() {
            return {
                programData: {
                    name: '',
                    type: '',
                    originUrl: '',
                    desc: ''
                },
                proRules: {
                    name: [{
                        required: true,
                        message: '请填写项目名称',
                        trigger: 'blur'
                    }],
                    type: [{
                        required: true,
                        message: '请选择项目类型',
                        trigger: 'change'
                    }],
                    originUrl: [{
                        required: true,
                        message: '请填写项目地址',
                        trigger: 'blur'
                    }],
                    desc: [{
                        required: true,
                        message: '请填写项目描述',
                        trigger: 'blur'
                    }]
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            Bus.setActivePath('/program/detail');
            next();
        },
        methods: {
            addPro(ruleForm) {
                this.validate(ruleForm).then(() => {
                    let params = this.programData;
                    api.post('projects', params).then(res => {
                        let _this = this;
                        this.$message({
                            message: res,
                            type: 'success',
                            duration: 2000,
                            onClose() {
                                _this.$router.push('/program/detail');
                            }
                        })

                    }).catch(res => {
                        this.$message({
                            message: '项目添加失败',
                            type: 'error'
                        })
                    })
                }).catch(() => {
                    this.$message({
                        message: '请完整填写项目信息',
                        type: 'warning'
                    })
                })
            },
            validate(ruleForm) {
                return new Promise((resolve, reject) => {
                    this.$refs[ruleForm].validate((valid) => {
                        if (valid) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                })          
            }
        }

    }
</script>

<style scoped>

</style>