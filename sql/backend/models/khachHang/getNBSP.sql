SELECT NB.MaNhaBan, NB.TenNhaBan 
FROM NhaBan AS NB 
INNER JOIN SanPham AS SP 
ON NB.MaNhaBan = SP.MaNhaBan AND SP.MaSP = @MaSP

