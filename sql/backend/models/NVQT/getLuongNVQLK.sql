SELECT lsbd.MaLSBD, lsbd.MaNV, nv.HoTen, lsbd.Luong, lsbd.Ngay
FROM [Tiki].[dbo].[LichSuBienDongLuong_NhanVienQuanLyKho] as lsbd 
INNER JOIN [Tiki].[dbo].[NhanVienQuanLyKho] as nv ON nv.MaNV = lsbd.MaNV
WHERE lsbd.MaLSBD BETWEEN (@page - 1)*10 AND @page*10 - 1