<template>
    <div class="recomInfoIndex">
        <div class="container">
            <div class="row">
                <h1>推薦資訊</h1>
            </div>
            <div class="row pb-2">
                <label class="col-2 text-right" for="account_search">帳號:</label>
                <input type="text" class="form-control col-10" placeholder="請輸入收尋帳號">
            </div>
            <div class="row mb-5">
               <table class="table border m-0">
                    <tbody>
                        <tr>
                        <th scope="row">會員帳號</th>
                            <td>09111XXXXX</td>
                            <td>操作</td>
                        </tr>
                        <tr>
                        <th scope="row">好友會員數</th>
                            <td>20</td>
                            <td>
                                <button class="btn btn-primary">詳細</button>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">好友有效會員數</th>
                            <td>15</td>
                            <td></td>
                        </tr>
                        <tr>
                        <th scope="row">好友累積收益</th>
                            <td>356,200</td>
                            <td></td>
                        </tr>
                        <tr>
                        <th scope="row">社群會員數</th>
                            <td>49</td>
                            <td>
                                <button class="btn btn-primary">詳細</button>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">社群有效會員數</th>
                            <td>33</td>
                            <td></td>
                        </tr>
                        <tr>
                        <th scope="row">社群累積收益</th>
                            <td>21400</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'recomInfoIndex',
     data() {
        return {
        }
    },
}
</script>