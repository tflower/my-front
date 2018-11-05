<template>
    <div class="p-box">
        <el-header class="f14">
            项目详情
        </el-header>
        <el-main>
            <el-button type="primary" @click="goto">
                <i class="el-icon-plus"></i>
                添加项目
            </el-button>
            <el-form :inline="true" :model="searchParams" class="mt20">
                <el-form-item label="项目名称">
                    <el-input v-model="searchParams.name" placeholder="项目名称" clearable></el-input>
                </el-form-item>
                <el-form-item label="项目类型">
                    <el-select v-model="searchParams.type" placeholder="项目类型">
                        <el-option :label="item.label" :value="item.value" v-for="item in typeArr" :key="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSearch">查询</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="gitData" style="width: 100%">
                <el-table-column prop="name" label="项目名称" width="180">
                </el-table-column>
                <el-table-column prop="originUrl" label="项目地址" width="400" align="center">
                </el-table-column>
                <el-table-column prop="type" label="项目类型">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                        <span type="text" size="small" :class="'status-' + scope.row.status">{{ scope.row.status }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleBuild(scope.row)" type="text" size="small">发布</el-button>
                        <el-button @click="handleCheck(scope.row)" type="text" size="small">查看</el-button>
                        <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next, jumper" :total="totalCount"
                :page-size="searchParams.pageSize" :current-page="searchParams.page">
            </el-pagination>
        </el-main>
    </div>
</template>
<script>
    import api from '@Asset/api'
    export default {
        data() {
            return {
                searchParams: {
                    name: '',
                    type: '',
                    pageSize: 10,
                    page: 1
                },
                totalCount: 0,
                gitData: [],
                typeArr: [{
                    label: '通用应用',
                    value: 'univeral-app'
                }, {
                    label: '通用组件',
                    value: 'univeral-component',
                }, {
                    label: '通用node服务器',
                    value: 'univeral-node',
                }]
            }
        },
        created() {
            this.getProgramList();
        },
        methods: {
            goto() {
                this.$router.push('/program/addpro')
            },
            onSearch() {
                this.searchParams.page = 1;
                this.getProgramList();
            },
            handleCurrentChange(curPage) {
                this.searchParams.page = curPage;
                this.getProgramList();
            },
            getProgramList() {
                let params = this.searchParams;
                api.get('projects', params).then(res => {
                    this.gitData = res.data;
                    this.searchParams.page = res.page;
                    this.totalCount = res.total;
                }).catch(res => {
                    this.$message({
                        message: res,
                        type: 'error'
                    })
                })
            },
            handleDelete(row) {
                this.$confirm(`确定要删除${row.name}项目吗？`).then(() => {
                    this.deleteItem(row.id);
                })
            },
            deleteItem(itemid) {
                api.post('', {
                    id: itemid
                }).then()
            },
            handleCheck(row) {

            },
            handleBuild(row) {
                let id = row.id;
                console.log(id)
                api.post(`projects/${id}/tasks`).then(res => {
                    window.open(`https://static-assets.cyt-rain.cn/portal-deploy-console/1.0.0/pages/home/index.html?id=${res.id}`,'_blank')
                    this.doBuild(id, res.id);
                })
            },
            doBuild(proId, taskId) {
                return api.get(`projects/${proId}/tasks/${taskId}/deploy`).then(res => {
                    
                }).catch(res => {

                })
            }

        }
    }
</script>

<style scoped>
    .el-pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;
    }

    .status-failed {
        color: red;
    }
</style>