select hd.MaHD, kh.Ten , hd.NgayLap, hd.TongTien, hd.TinhTrang, hd.SLTikiXu, hd.PhiVC, hd.ThanhTienHD, hd.NgayGiaoTC,hd.GhiChu
from HoaDon as hd
inner join  KhachHang as kh on kh.MaKH = hd.MaKH
and hd.MaHD = @MaHD