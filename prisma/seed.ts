import prisma from "../src/config/database.js";

export async function main() {
  await prisma.room.createMany({
    data: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }],
  });
  await prisma.image.createMany({
    data: [
      {
        link: "http://s2.glbimg.com/T-1vxzmstze-G_p48NTe6dS7LHg=/e.glbimg.com/og/ed/f/original/2017/03/27/posh-pet-hotel-cachorro-suite.jpg",
        roomId: 0,
      },
      {
        link: "https://s2.glbimg.com/hcSfUprEO0o-wy-hBtlysNCawqM=/0x0:2048x1367/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/B/u/nlradpSRWiV3PhABQzJQ/hotelcao1.jpg",
        roomId: 1,
      },
      {
        link: "http://s2.glbimg.com/qlbJvD6WqHCZNA99h1g6ZzMS6O4=/620x455/e.glbimg.com/og/ed/f/original/2017/03/27/d-pet-hotels-caes-luxo.jpg",
        roomId: 2,
      },
      {
        link: "http://s2.glbimg.com/C3KUBfrHTNTUYcMdYp21ZHnee5M=/290x217/s2.glbimg.com/v3IxGQwn_gK4XlzNhAVeg98RcJU=/s.glbimg.com/jo/g1/f/original/2013/08/02/2013-08-02t165445z_44527581.jpg",
        roomId: 3,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
