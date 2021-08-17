select count(*) as donhang from SanPham as sp
INNER JOIN CT_HoaDon as cthd ON sp.MaSP = cthd.MaSP
INNER JOIN HoaDon as hd ON cthd.MaHD = hd.MaHD
and sp.MaNhaBan = @MaNhaBan and MONTH(hd.NgayGiaoTC) = @thang