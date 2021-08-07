SELECT *
FROM [SanPham]
WHERE [MaSP] BETWEEN (@page - 1)*30 AND @page*30 - 1;