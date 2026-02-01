import Schedule from "../models/Schedule.js";

export const createSchedule = async (req, res) => {
  try {
    const userId = req.user.id;

    const { title, description, date, time } = req.body;

    const newSchedule = await Schedule.create({
      user_id: userId,
      title,
      description,
      date: new Date(date),
      time: new Date(`1970-01-01T${time}:00Z`),
    });
    res
      .status(201)
      .json({ message: "Jadwal berhasil dibuat", Jadwal: newSchedule });
  } catch (error) {
    console.error("Error creating schedules: ", error);
    res.status(500).json({ message: "Gagal Membuat Jadwal" });
  }
};

export const getAllSchedules = async (req, res) => {
  try {
    const userId = req.user.id;
    const schedules = await Schedule.findAll(userId);
    res.status(200).json(schedules);
  } catch (error) {
    console.error("Error getting schedules:", error);
    res.status(500).json({ message: "Gagal mengambil jadwal" });
  }
};

export const getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const schedule = await Schedule.findById(id, userId);
    if (!schedule) {
      return res.status(404).json({ message: "Jadwal tidak ditemukan" });
    }
    res.status(200).json(schedule);
  } catch (error) {
    console.error("Error getting schedule by ID:", error);
    res.status(500).json({ message: "Gagal mengambil jadwal" });
  } 
};

export const updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const { date, time, ...otherData } = req.body;
    const dataToUpdate = { ...otherData };

    if (date) {
      dataToUpdate.date = new Date(date);
    }
    if (time) {
      dataToUpdate.time = new Date(`1970-01-01T${time}:00Z`);
    }

    const updatedSchedule = await Schedule.update(id, userId, dataToUpdate);

    if (!updatedSchedule) {
      return res.status(404).json({ message: "Jadwal tidak ditemukan" });
    }
    res.status(200).json({
      message: "Jadwal berhasil diperbarui",
      schedule: updatedSchedule,
    });
  } catch (error) {
    console.error("Error updating schedule:", error);

    if (error.code && error.code.startsWith("P")) {

      return res.status(400).json({
        message: "Kesalahan database saat memperbarui jadwal",
      });
    }
    res
      .status(500)
      .json({ message: "Gagal memperbarui jadwal", error: error.message });
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const deletedSchedule = await Schedule.delete(id, userId);
    if (!deletedSchedule) {
      return res.status(404).json({ message: "Jadwal tidak ditemukan" });
    }
    res.status(200).json({ message: "Jadwal berhasil dihapus" });
  } catch (error) {
    console.error("Error deleting schedule:", error);
    res.status(500).json({ message: "Gagal Menghapus Jadwal" });
  }
};
