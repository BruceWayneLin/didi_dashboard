<template>
    <div class="management">
        <div class="container">
            <h1>任務管理</h1>
            <div class="col-6">
                <div class="row mb-3">
                    <label for="mission_type" class="col-sm-4 col-form-label">任務類型</label>
                    <div class="col-sm-8">
                        <select class="form-control" id="mission_type">
                            <option value="everyday">每日任務</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="mission_status" class="col-sm-4 col-form-label">任務狀態</label>
                    <div class="col-sm-8">
                        <select class="form-control" id="mission_status">
                            <option value="all">全部</option>
                        </select>
                    </div>
                </div>
                <input class="btn btn-primary mr-2" value="查詢" />
                <input class="btn btn-info ml-2" value="新增任務" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'management'
}
</script>