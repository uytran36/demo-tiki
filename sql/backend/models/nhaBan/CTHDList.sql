select cthd.* from SanPham as sp
INNER JOIN CT_HoaDon as cthd ON sp.MaSP = cthd.MaSP
JOIN HoaDon as hd ON cthd.MaHD = hd.MaHD
where sp.MaNhaBan = @MaNhaBan 