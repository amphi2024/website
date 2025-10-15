import { create } from 'zustand';
import {
    CLOUD_DEB,
    CLOUD_EXE,
    MUSIC_DEB,
    MUSIC_EXE,
    NOTES_DEB,
    NOTES_EXE,
    PHOTOS_DEB,
    PHOTOS_EXE
} from "./downloadLinks";

type Platform = {
    label: string;
    value: string;
};

type BinaryType = {
    label: string;
    value: string;
};

interface AppState {
    selectedPlatform: Platform;
    setSelectedPlatform: (selectedPlatform: Platform) => void;

    notesBinaryTypeWindows: BinaryType;
    setNotesBinaryTypeWindows: (selectedBinaryType: BinaryType) => void;

    notesBinaryTypeLinux: BinaryType;
    setNotesBinaryTypeLinux: (selectedLinuxBinaryType: BinaryType) => void;

    musicBinaryTypeWindows: BinaryType;
    setMusicBinaryTypeWindows: (selectedBinaryType: BinaryType) => void;

    musicBinaryTypeLinux: BinaryType;
    setMusicBinaryTypeLinux: (selectedLinuxBinaryType: BinaryType) => void;

    photosBinaryTypeWindows: BinaryType;
    setPhotosBinaryTypeWindows: (selectedBinaryType: BinaryType) => void;

    photosBinaryTypeLinux: BinaryType;
    setPhotosBinaryTypeLinux: (selectedLinuxBinaryType: BinaryType) => void;

    cloudBinaryTypeWindows: BinaryType;
    setCloudBinaryTypeWindows: (selectedBinaryType: BinaryType) => void;

    cloudBinaryTypeLinux: BinaryType;
    setCloudBinaryTypeLinux: (selectedLinuxBinaryType: BinaryType) => void;
}

export const useStore = create<AppState>(set => ({
    selectedPlatform: {label: "Windows", value: "windows"},
    setSelectedPlatform: (selectedPlatform: BinaryType) => set({ selectedPlatform: selectedPlatform }),
    notesBinaryTypeWindows: NOTES_EXE,
    setNotesBinaryTypeWindows: (selectedBinaryType: BinaryType) => set({ notesBinaryTypeWindows: selectedBinaryType }),
    notesBinaryTypeLinux: NOTES_DEB,
    setNotesBinaryTypeLinux: (selectedLinuxBinaryType: BinaryType) => set({ notesBinaryTypeLinux: selectedLinuxBinaryType }),
    musicBinaryTypeWindows: MUSIC_EXE,
    setMusicBinaryTypeWindows: (selectedBinaryType: BinaryType) => set({ musicBinaryTypeWindows: selectedBinaryType }),
    musicBinaryTypeLinux: MUSIC_DEB,
    setMusicBinaryTypeLinux: (selectedLinuxBinaryType: BinaryType) => set({ musicBinaryTypeLinux: selectedLinuxBinaryType }),
    photosBinaryTypeWindows: PHOTOS_EXE,
    setPhotosBinaryTypeWindows: (selectedBinaryType: BinaryType) => set({ photosBinaryTypeWindows: selectedBinaryType }),
    photosBinaryTypeLinux: PHOTOS_DEB,
    setPhotosBinaryTypeLinux: (selectedLinuxBinaryType: BinaryType) => set({ photosBinaryTypeLinux: selectedLinuxBinaryType }),
    cloudBinaryTypeWindows: CLOUD_EXE,
    setCloudBinaryTypeWindows: (selectedBinaryType: BinaryType) => set({cloudBinaryTypeWindows: selectedBinaryType}),
    cloudBinaryTypeLinux: CLOUD_DEB,
    setCloudBinaryTypeLinux: (selectedLinuxBinaryType: BinaryType) => set({ cloudBinaryTypeLinux: selectedLinuxBinaryType }),
}));