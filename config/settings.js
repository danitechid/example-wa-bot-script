/*
 * Information
 * Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
 * Contact creator / Developer: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)
*/

/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator / Developer)
 * @danitech/wa-web-api (Library "WhatsApp Web API" provider)
*/

module.exports = {
  pairing_mode: true,
  session_folder_name: 'session',
  browser: ["Chrome (Windows)", "latest"],
  mode: 'both', // Private, Group, Both/All
  public_mode: true,
  offline_status: false,
  auto_update_profile_status: false,
  auto_read_messages: true,
  auto_typing: true,
  auto_recording: false,
  prefix: '.',
  bot: {
    name: 'Bot Name',
    profile_status: 'Bot Status'
  },
  owner: {
    name: ["Owner Name"],
    number: ["628xxx"]
  }
  date: {
    country: 'id-ID',
    time_zone: 'Asia/Jakarta'
  }
};