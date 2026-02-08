import { create } from 'zustand';
import {
    CLOUD_APPLE_APP_STORE,
    CLOUD_DMG,
    CLOUD_EXE, CLOUD_PLAY_STORE, CLOUD_SNAP,
    MUSIC_APPLE_APP_STORE,
    MUSIC_DMG,
    MUSIC_EXE, MUSIC_PLAY_STORE, MUSIC_SNAP,
    NOTES_APPLE_APP_STORE,
    NOTES_DMG,
    NOTES_EXE, NOTES_PLAY_STORE, NOTES_SNAP,
    PHOTOS_APPLE_APP_STORE, PHOTOS_DMG, PHOTOS_EXE, PHOTOS_PLAY_STORE, PHOTOS_SNAP,
} from "./downloadLinks";

export type Platform = {
    label: string;
    value: string;
};

export type DownloadOption = {
    label: string;
    value: string;
    type: string;
};

interface AppState {
    selectedPlatform: Platform;
    setSelectedPlatform: (selectedPlatform: Platform) => void;

    notesDownloadOptions: Record<string, DownloadOption>;
    setNotesDownloadOptions: (notesDownloadOptions: Record<string, DownloadOption>) => void;

    musicDownloadOptions: Record<string, DownloadOption>;
    setMusicDownloadOptions: (musicDownloadOptions: Record<string, DownloadOption>) => void;

    photosDownloadOptions: Record<string, DownloadOption>;
    setPhotosDownloadOptions: ( photosDownloadOptions: Record<string, DownloadOption>) => void;

    cloudDownloadOptions: Record<string, DownloadOption>;
    setCloudDownloadOptions: (cloudDownloadOptions: Record<string, DownloadOption>) => void;
}

export const useStore = create<AppState>(set => ({
    selectedPlatform: {label: "Windows", value: "windows"},
    setSelectedPlatform: (selectedPlatform: Platform) => set({ selectedPlatform: selectedPlatform }),
    notesDownloadOptions: {
        windows: NOTES_EXE,
        macos: NOTES_DMG,
        linux: NOTES_SNAP,
        android: NOTES_PLAY_STORE,
        ios: NOTES_APPLE_APP_STORE
    },
    musicDownloadOptions: {
        windows: MUSIC_EXE,
        macos: MUSIC_DMG,
        linux: MUSIC_SNAP,
        android: MUSIC_PLAY_STORE,
        ios: MUSIC_APPLE_APP_STORE
    },
    photosDownloadOptions: {
        windows: PHOTOS_EXE,
        macos: PHOTOS_DMG,
        linux: PHOTOS_SNAP,
        android: PHOTOS_PLAY_STORE,
        ios: PHOTOS_APPLE_APP_STORE
    },
    cloudDownloadOptions: {
        windows: CLOUD_EXE,
        macos: CLOUD_DMG,
        linux: CLOUD_SNAP,
        android: CLOUD_PLAY_STORE,
        ios: CLOUD_APPLE_APP_STORE
    },
    setNotesDownloadOptions: (options) => set({ notesDownloadOptions: options }),
    setMusicDownloadOptions: (options) => set({ musicDownloadOptions: options }),
    setPhotosDownloadOptions: (options) => set({ photosDownloadOptions: options }),
    setCloudDownloadOptions: (options) => set({ cloudDownloadOptions: options }),
}));