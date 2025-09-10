document.addEventListener("DOMContentLoaded", () => {
  const sliders = {
    "slider-ae": [
      "https://sun9-50.userapi.com/s/v1/ig2/_PYXtRVOdeTjNTJgIN6-7kXOhcB58NgjOMXL_2RHLbcLvXX-EvzL7QJrFJC3Np5EDnDivUCpeKhTJr9gg6chl549.jpg",
      "https://sun9-13.userapi.com/s/v1/ig2/bRuTLn6OMIEMUbFXNCDiEqIfdjQ-zXQIwf_Blo9Q4JYDkQC0ITZ7queNAXTOx6UDUEXAxpgJQNKB1VnGNBBda2cQ.jpg",
      "https://sun9-26.userapi.com/s/v1/ig2/WfAYu4fBYhHT7l6vlYc9olg0Z2mlKUP7RyNaGnpVDdhBgxPxE5T7ZATUUHRaz-zINyPmxm7yAD-7md6Aux5k1btN.jpg"
    ],
    "slider-u": [
      "https://sun9-1.userapi.com/s/v1/ig2/zFxfNGu9GH8lUEIrJWx4VO6UM91HQ2Cp5TyRb_-UENASU6rto_3d_Ylw8voD1jhVgzkoYdg_VIezgnZi9-T9nSwd.jpg",
      "https://sun9-63.userapi.com/s/v1/ig2/0qRCRcrSHP2PHfRXizTfDOJMSau86KWKsPkILSKUNULGf4MHfJCFhYreveNBRA0fGkOzXc4x_p_rR4kSS7b5cbeS.jpg"
    ],
    "slider-a": [
      "https://sun9-58.userapi.com/s/v1/ig2/mHjK2vweXfk1KpkKs9fECIPbwlMfu0FlyXcAfkuzsycvhDSIakisymjxUvik4_-mMEBfEOb7L4sdBd0AdgnAEWZ9.jpg",
      "https://sun9-46.userapi.com/s/v1/ig2/VFrv2eS-_Zc3W4MONo17KAZmqbMOyu8aaRzfyYyylrzQC2XsQ41ZKE6-SwzWDQ7lcan1wr8grY18k0IESHWMVJcf.jpg"
    ],
    "slider-o": [
      "https://sun9-12.userapi.com/s/v1/ig2/miKKUVFUgU3TeC-S_NbRksgo-X3FLJUiBEibJi2pP93HvB8jgjhKpfgWJWPa45bRUzjh755hJe5Pa_yG8tDORLGF.jpg",
      "https://sun9-53.userapi.com/s/v1/ig2/eIQRrmzbPK8KMaTdaQK1iNvsQJmfZ0oDwBaZobwce4vLatHoJHjtzrN62CpG2H5CkZx_s6tyRvXF7STJ7xjLlu83.jpg"
    ]
  };

  Object.entries(sliders).forEach(([id, images]) => {
    const slider = document.getElementById(id);
    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      slider.appendChild(img);
    });
  });

  document.getElementById("booking-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    window.open("https://vk.com/app51489934_-216369771", "_blank");
  });
});
