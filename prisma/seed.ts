import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: '1ad7ee5e-ac03-4cc2-82c4-3624874150bd',
      title: "Unite Summiteeee",
      slug: "unite-summit",
      details: "Um evento p/ devs apaixonados(as) por código!",
      maximumAttendees: 120,
    },
  });

}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
