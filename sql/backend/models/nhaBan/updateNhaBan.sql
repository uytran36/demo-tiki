UPDATE [Tiki].[dbo].[NhaBan]
SET
    [TenNhaBan] =   @TenNhaBan,
    [SDTNhaBan] = @SDTNhaBan,
    [EmailNhaBan] = @EmailNhaBan,
    [DiaChiNhaBan] = @DiaChiNhaBan,
    [MatKhauNhaBan] = @MatKhauNhaBan
WHERE  [MaNhaBan] = @MaNhaBan