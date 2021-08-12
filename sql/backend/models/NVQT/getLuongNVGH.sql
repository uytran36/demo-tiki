SELECT lsbd.MaLSBD, lsbd.MaNV, nv.Ten, nv.DonHangDaGiao, lsbd.Luong, lsbd.Ngay
FROM [Tiki].[dbo].[LichSuBienDongLuong_NhanVienGiaoHang] as lsbd 
INNER JOIN [Tiki].[dbo].[NhanVienGiaoHang] as nv ON nv.MaNV = lsbd.MaNV
WHERE lsbd.MaLSBD BETWEEN (@page - 1)*10 AND @page*10 - 1