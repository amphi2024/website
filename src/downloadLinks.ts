export const NOTES_VERSION = "2.1.0";
export const MUSIC_VERSION = "2.1.0";
export const PHOTOS_VERSION = "2.0.0";
export const CLOUD_VERSION = "1.0.0";

export const platforms = [
    {label: "Windows", value: "windows"},
    {label: "macOS", value: "macos"},
    {label: "Linux", value: "linux"},
    {label: "Android", value: "android"},
    {label: "iOS", value: "ios"},
];

export const NOTES_EXE = {
    label: "EXE",
    type: "exe",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-Windows-x64.exe`
};

export const NOTES_ZIP = {
    label: "ZIP",
    type: "zip",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-Windows-x64-${NOTES_VERSION}.zip`
};

export const SCOOP = {
    label: "Scoop",
    type: "scoop",
    value: "https://github.com/amphi2024/scoop-bucket"
};
export const NOTES_DMG = {
    label: "DMG",
    type: "dmg",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-macOS.dmg`
};
export const HOMEBREW = {
    label: "Homebrew",
    value: "https://github.com/amphi2024/homebrew-amphi",
    type: "homebrew"
};
export const FLATPAK = {
    label: "Flatpak",
    value: "https://github.com/amphi2024/amphi-flatpak",
    type: "flatpak"
};

export const NOTES_TAR = {
    label: "TAR",
    type: "tar",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-Linux-x86_64.tar.gz`
};

export const NOTES_DEB = {
    label: "DEB",
    type: "deb",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-Linux-x86_64.deb`
};

export const NOTES_RPM = {
    label: "RPM",
    type: "rpm",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-Linux-x86_64.rpm`
};

export const NOTES_TAR_ARM = {
    label: "TAR (ARM64)",
    type: "tar",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-Linux-arm64.tar.gz`
};

export const NOTES_DEB_ARM = {
    label: "DEB (ARM64)",
    type: "deb",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-Linux-arm64.deb`
};

export const NOTES_RPM_ARM = {
    label: "RPM (ARM64)",
    type: "rpm",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-Linux-arm64.rpm`
};

export const NOTES_SNAP = {
    label: "Snap",
    value: "https://snapcraft.io/amphi-notes",
    type: "snap"
};

export const NOTES_AUR = {
    label: "AUR",
    value: "https://aur.archlinux.org/packages/amphi-notes",
    type: "aur"
};

export const NOTES_APK = {
    label: "APK",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/Notes-${NOTES_VERSION}-Android.apk`,
    type: "apk"
};

export const NOTES_PLAY_STORE = {
    label: "Play Store",
    value: "https://play.google.com/store/apps/details?id=com.amphi.notes",
    type: "play_store"
};

export const NOTES_APPLE_APP_STORE = {
    label: "APP_STORE",
    value: "https://apps.apple.com/app/amphi-notes/id6740662483",
    type: "app_store",
};


export const MUSIC_EXE = {
    label: "EXE",
    type: "exe",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-Windows-x64.exe`
};

export const MUSIC_ZIP = {
    label: "ZIP",
    type: "zip",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-Windows-x64.zip`
};

export const MUSIC_DMG = {
    label: "DMG",
    type: "dmg",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-macOS.dmg`
};

export const MUSIC_TAR = {
    label: "TAR",
    type: "tar",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-Linux-x86_64.tar.gz`
};

export const MUSIC_DEB = {
    label: "DEB",
    type: "deb",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-Linux-x86_64.deb`
};

export const MUSIC_RPM = {
    label: "RPM",
    type: "rpm",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-Linux-x86_64.rpm`
};

export const MUSIC_TAR_ARM = {
    label: "TAR (ARM64)",
    type: "tar",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-Linux-arm64.tar.gz`
};

export const MUSIC_DEB_ARM = {
    label: "DEB (ARM64)",
    type: "deb",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-Linux-arm64.deb`
};

export const MUSIC_RPM_ARM = {
    label: "RPM (ARM64)",
    type: "rpm",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-Linux-arm64.rpm`
};

export const MUSIC_SNAP = {
    label: "Snap",
    value: "https://snapcraft.io/amphi-music",
    type: "snap"
};

export const MUSIC_AUR = {
    label: "AUR",
    value: "https://aur.archlinux.org/packages/amphi-music",
    type: "aur"
};

export const MUSIC_APK = {
    label: "APK",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/Music-${MUSIC_VERSION}-Android.apk`,
    type: "apk"
};

export const MUSIC_PLAY_STORE = {
    label: "Play Store",
    value: "https://play.google.com/store/apps/details?id=com.amphi.music",
    type: "play_store"
};

export const MUSIC_APPLE_APP_STORE = {
    label: "APP_STORE",
    value: "https://apps.apple.com/app/amphi-music/id6747280291",
    type: "app_store",
};


export const PHOTOS_EXE = {
    label: "EXE",
    type: "exe",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Windows-x64.exe`
};

export const PHOTOS_ZIP = {
    label: "ZIP",
    type: "zip",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Windows-x64.zip`
};

export const PHOTOS_DMG = {
    label: "DMG",
    type: "dmg",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-macOS.dmg`
};

export const PHOTOS_TAR = {
    label: "TAR",
    type: "tar",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-x86_64.tar.gz`
};

export const PHOTOS_DEB = {
    label: "DEB",
    type: "deb",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-x86_64.deb`
};

export const PHOTOS_RPM = {
    label: "RPM",
    type: "rpm",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-x86_64.rpm`
};

export const PHOTOS_TAR_ARM = {
    label: "TAR (ARM64)",
    type: "tar",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-arm64.tar.gz`
};

export const PHOTOS_DEB_ARM = {
    label: "DEB (ARM64)",
    type: "deb",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-arm64.deb`
};

export const PHOTOS_RPM_ARM = {
    label: "RPM (ARM64)",
    type: "rpm",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-arm64.rpm`
};

export const PHOTOS_SNAP = {
    label: "Snap",
    value: "https://snapcraft.io/amphi-photos",
    type: "snap"
};

export const PHOTOS_AUR = {
    label: "AUR",
    value: "https://aur.archlinux.org/packages/amphi-photos",
    type: "aur"
};

export const PHOTOS_APK = {
    label: "APK",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Android.apk`,
    type: "apk"
};

export const PHOTOS_PLAY_STORE = {
    label: "Play Store",
    value: "https://play.google.com/store/apps/details?id=com.amphi.photos",
    type: "play_store"
};

export const PHOTOS_APPLE_APP_STORE = {
    label: "APP_STORE",
    value: "https://apps.apple.com/app/amphi-photos/id6751439356",
    type: "app_store",
};


export const CLOUD_EXE = {
    label: "EXE",
    type: "exe",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Windows-x64.exe`
};

export const CLOUD_ZIP = {
    label: "ZIP",
    type: "zip",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Windows-x64.zip`
};

export const CLOUD_DMG = {
    label: "DMG",
    type: "dmg",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-macOS.dmg`
};

export const CLOUD_TAR = {
    label: "TAR",
    type: "tar",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-x86_64.tar.gz`
};

export const CLOUD_DEB = {
    label: "DEB",
    type: "deb",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-x86_64.deb`
};

export const CLOUD_RPM = {
    label: "RPM",
    type: "rpm",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-x86_64.rpm`
};

export const CLOUD_TAR_ARM = {
    label: "TAR (ARM64)",
    type: "tar",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-arm64.tar.gz`
};

export const CLOUD_DEB_ARM = {
    label: "DEB (ARM64)",
    type: "deb",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-arm64.deb`
};

export const CLOUD_RPM_ARM = {
    label: "RPM (ARM64)",
    type: "rpm",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-arm64.rpm`
};

export const CLOUD_SNAP = {
    label: "Snap",
    value: "https://snapcraft.io/amphi-cloud",
    type: "snap"
};

export const CLOUD_AUR = {
    label: "AUR",
    value: "https://aur.archlinux.org/packages/amphi-cloud",
    type: "aur"
};

export const CLOUD_APK = {
    label: "APK",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Android.apk`,
    type: "apk"
};

export const CLOUD_PLAY_STORE = {
    label: "Play Store",
    value: "https://play.google.com/store/apps/details?id=com.amphi.cloud",
    type: "play_store"
};

export const CLOUD_APPLE_APP_STORE = {
    label: "APP_STORE",
    value: "https://apps.apple.com/app/amphi-cloud/id6753095443",
    type: "app_store",
};