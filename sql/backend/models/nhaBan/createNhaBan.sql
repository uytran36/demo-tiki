INSERT INTO [Tiki].[dbo].[NhaBan]
(
    [MaNhaBan]
      ,[TenNhaBan]
      ,[SDTNhaBan]
      ,[EmailNhaBan]
      ,[DiaChiNhaBan]
      ,[MatKhauNhaBan]
)
VALUES 
(
    @MaNhaBan,
    @TenNhaBan,
    @SDTNhaBan,
    @EmailNhaBan,
    @DiaChiNhaBan,
    @MatKhauNhaBan
)

INSERT INTO [Tiki].[dbo].[HopDong]
(
    [MaHopDong]
      ,[NgayLapHD]
      ,[NgayHetHanHD]
      ,[MoTaHD]
      ,[MaNhaBan]   
)
VALUES(
    @MaHopDong,
    @NgayLapHD,
    @NgayHetHanHD,
    @MoTaHD,
    @MaNhaBan
)
