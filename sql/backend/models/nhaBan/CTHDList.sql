select cthd.MaHD, sp.TenSP, cthd.SoLuong, cthd.ThanhTien from SanPham as sp
INNER JOIN CT_HoaDon as cthd ON sp.MaSP = cthd.MaSP
INNER JOIN HoaDon as hd ON cthd.MaHD = hd.MaHD
AND sp.MaNhaBan = @MaNhaBan 