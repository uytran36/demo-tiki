select sp.MaSP, sp.TenSP, sp.MoTaSP, sp.SLTonSP, sp.GiaBanSP,
 sp.GiaGiamSP, sp.ThanhTienSP, sp.MaLoaiSP, sp.url from SanPham as sp
where sp.MaNhaBan = @MaNhaBan