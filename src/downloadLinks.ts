const NOTES_VERSION = "1.1.1";
const MUSIC_VERSION = "1.0.0";
const PHOTOS_VERSION = "1.0.0";
const CLOUD_VERSION = "1.0.0";

export const platforms = [
    {label: "Windows", value: "windows"},
    {label: "macOS", value: "macos"},
    {label: "Linux", value: "linux"},
    {label: "Android", value: "android"},
    {label: "iOS", value: "ios"},
];

export const NOTES_EXE = {
    label: ".exe",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-windows-x64-${NOTES_VERSION}.exe`
};

export const NOTES_ZIP = {
    label: ".zip",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-windows-x64-${NOTES_VERSION}.zip`
};

export const SCOOP = "https://github.com/amphi2024/scoop-bucket";
export const NOTES_DMG = `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-macos-${NOTES_VERSION}.dmg`;
export const HOMEBREW_LINK = "https://github.com/amphi2024/homebrew-amphi";
export const FLATPAK_LINK = "https://github.com/amphi2024/amphi-flatpak";

export const NOTES_TAR = {
    label: ".tar.gz",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-linux-x64-${NOTES_VERSION}.tar.gz`
};

export const NOTES_DEB = {
    label: ".deb",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-linux-x64-${NOTES_VERSION}.deb`
};

export const NOTES_RPM = {
    label: ".rpm",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-linux-x64-${NOTES_VERSION}.rpm`
};

export const NOTES_TAR_ARM = {
    label: ".tar.gz (ARM64)",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-linux-arm64-${NOTES_VERSION}.tar.gz`
};

export const NOTES_DEB_ARM = {
    label: ".deb (ARM64)",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-linux-arm64-${NOTES_VERSION}.deb`
};

export const NOTES_RPM_ARM = {
    label: ".rpm (ARM64)",
    value: `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-linux-arm64-${NOTES_VERSION}.rpm`
};

export const NOTES_SNAP = "https://snapcraft.io/amphi-notes";

export const NOTES_AUR = "https://aur.archlinux.org/packages/amphi-notes";

export const NOTES_APK = `https://github.com/amphi2024/notes/releases/download/v${NOTES_VERSION}/notes-android-${NOTES_VERSION}.apk`;

export const NOTES_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.amphi.notes";

export const NOTES_APPLE_APP_STORE = "https://apps.apple.com/app/amphi-notes/id6740662483";


export const MUSIC_EXE = {
    label: ".exe",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-windows-x64-${MUSIC_VERSION}.exe`
};

export const MUSIC_ZIP = {
    label: ".zip",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-windows-x64-${MUSIC_VERSION}.zip`
};

export const MUSIC_DMG = `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-macos-${MUSIC_VERSION}.dmg`;

export const MUSIC_TAR = {
    label: ".tar.zst",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-linux-x64-${MUSIC_VERSION}.tar.zst`
};

export const MUSIC_DEB = {
    label: ".deb",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-linux-x64-${MUSIC_VERSION}.deb`
};

export const MUSIC_RPM = {
    label: ".rpm",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-linux-x64-${MUSIC_VERSION}.rpm`
};

export const MUSIC_TAR_ARM = {
    label: ".tar.zst (ARM64)",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-linux-arm64-${MUSIC_VERSION}.tar.zst`
};

export const MUSIC_DEB_ARM = {
    label: ".deb (ARM64)",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-linux-arm64-${MUSIC_VERSION}.deb`
};

export const MUSIC_RPM_ARM = {
    label: ".rpm (ARM64)",
    value: `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-linux-arm64-${MUSIC_VERSION}.rpm`
};

export const MUSIC_SNAP = "https://snapcraft.io/amphi-music";

export const MUSIC_AUR = "https://aur.archlinux.org/packages/amphi-music";

export const MUSIC_APK = `https://github.com/amphi2024/music/releases/download/v${MUSIC_VERSION}/music-android-${MUSIC_VERSION}.apk`;

export const MUSIC_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.amphi.music";

export const MUSIC_APPLE_APP_STORE = "https://apps.apple.com/us/app/amphi-music/id6747280291";



export const PHOTOS_EXE = {
    label: ".exe",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Windows-x64.exe`
};

export const PHOTOS_ZIP = {
    label: ".zip",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Windows-x64.zip`
};

export const PHOTOS_DMG = `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-macOS.dmg`;

export const PHOTOS_TAR = {
    label: ".tar.gz",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-x86_64.tar.gz`
};

export const PHOTOS_DEB = {
    label: ".deb",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-x86_64.deb`
};

export const PHOTOS_RPM = {
    label: ".rpm",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-x86_64.rpm`
};

export const PHOTOS_TAR_ARM = {
    label: ".tar.gz (ARM64)",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-arm64.tar.gz`
};

export const PHOTOS_DEB_ARM = {
    label: ".deb (ARM64)",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-arm64.deb`
};

export const PHOTOS_RPM_ARM = {
    label: ".rpm (ARM64)",
    value: `https://github.com/amphi2024/photos/releases/download/v${PHOTOS_VERSION}/Photos-${PHOTOS_VERSION}-Linux-arm64.rpm`
};

export const PHOTOS_SNAP = "https://snapcraft.io/amphi-photos";

export const PHOTOS_AUR = "https://aur.archlinux.org/packages/amphi-photos";

export const PHOTOS_APK = `https://github.com/amphi2024/photos/releases/download/v1.0.1/Photos-1.0.1-Android.apk`;

export const PHOTOS_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.amphi.photos";

export const PHOTOS_APPLE_APP_STORE = "https://apps.apple.com/us/app/amphi-photos/id6751439356";



export const CLOUD_EXE = {
    label: ".exe",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Windows-x64.exe`
};

export const CLOUD_ZIP = {
    label: ".zip",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Windows-x64.zip`
};

export const CLOUD_DMG = `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-macOS.dmg`;

export const CLOUD_TAR = {
    label: ".tar.gz",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-x86_64.tar.gz`
};

export const CLOUD_DEB = {
    label: ".deb",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-x86_64.deb`
};

export const CLOUD_RPM = {
    label: ".rpm",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-x86_64.rpm`
};

export const CLOUD_TAR_ARM = {
    label: ".tar.gz (ARM64)",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-arm64.tar.gz`
};

export const CLOUD_DEB_ARM = {
    label: ".deb (ARM64)",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-arm64.deb`
};

export const CLOUD_RPM_ARM = {
    label: ".rpm (ARM64)",
    value: `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Linux-arm64.rpm`
};

export const CLOUD_SNAP = "https://snapcraft.io/amphi-cloud";

export const CLOUD_AUR = "https://aur.archlinux.org/packages/amphi-cloud";

export const CLOUD_APK = `https://github.com/amphi2024/cloud/releases/download/v${CLOUD_VERSION}/Cloud-${CLOUD_VERSION}-Android.apk`;

export const CLOUD_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.amphi.cloud";

export const CLOUD_APPLE_APP_STORE = "https://apps.apple.com/us/app/amphi-cloud/id6753095443";