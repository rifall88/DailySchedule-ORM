import prisma from "../database/dbConfig.js";

class User {
  // Method untuk membuat user baru
  static async create(userData) {
    return prisma.user.create({
      // Menggunakan prisma.user (singular)
      data: userData,
    });
  }

  // Method untuk mencari user berdasarkan email
  static async findByEmail(email) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  static async findById(id) {
    return prisma.user.findMany({
      where: { id: parseInt(id) },
      select: { id: true, name: true, email: true, created_at: true },
    });
  }

  static async update(id, userData) {
    return prisma.user.update({
      where: { id: parseInt(id) },
      data: userData,
    });
  }
}

export default User;
