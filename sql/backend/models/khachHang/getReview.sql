SELECT DGSP.NgayDanhGia, 
	DGSP.DiemDanhGia, 
	DGSP.MoTa, 
	KH.Ten 
FROM DanhGiaSP AS DGSP 
INNER JOIN KhachHang AS KH 
ON KH.MaKH = DGSP.MaKhachHang AND DGSP.MaSP = @MaSP
