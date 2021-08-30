import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import TrangChu from './components/TrangChu.vue';
import DangNhap from './components/DangNhap.vue';
import DangKi from './components/DangKi.vue';
import CuaHang from './components/CuaHang.vue';
import GioHang from './components/GioHang.vue';
import LienHe from './components/LienHe.vue';
import Blog from './components/Blog.vue';
import DatHang from './components/DatHang.vue';
import AdminPage from './admin/AdminPage.vue';
import DanhMuc from './admin/DanhMuc.vue';
import SanPham from './admin/SanPham.vue';
import ThongKe from './admin/ThongKe.vue';

const routes = [
    { path: "/", component: TrangChu },
    { path: "/dangnhap", component: DangNhap },
    { path: "/taotaikhoan", component: DangKi },
    { path: "/cuahang", component: CuaHang },
    { path: "/giohang", component: GioHang },
    { path: "/lienhe", component: LienHe },
    { path: "/blog", component: Blog },
    { path: "/dathang", component: DatHang },
    { path: "/adminpage", component: AdminPage },
    { path: "/quanlisanpham", component: SanPham },
    { path: "/quanlidanhmuc", component: DanhMuc },
    { path: "/thongke", component: ThongKe },
];

const router = new VueRouter({ mode: 'history', routes });

export default router;

