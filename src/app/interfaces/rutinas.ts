// Interfaz principal
export interface Ejercicio {
    id: number;
    uuid: string;
    created: string;
    last_update: string;
    last_update_global: string;
    category: Category;
    muscles: Muscle[];
    muscles_secondary: Muscle[];
    equipment: Equipment[];
    license: License;
    license_author: string;
    images: ExerciseImage[];
    translations: Translation[];
    variations: number;
    videos: ExerciseVideo[];
    author_history: string[];
    total_authors_history: string[];
}

// Interfaces auxiliares
export interface Category {
    id: number;
    name: string;
}

export interface Muscle {
    id: number;
    name: string;
    name_en: string;
    is_front: boolean;
    image_url_main: string;
    image_url_secondary: string;
}

export interface Equipment {
    id: number;
    name: string;
}

export interface License {
    id: number;
    full_name: string;
    short_name: string;
    url: string;
}

export interface ExerciseImage {
    id: number;
    uuid: string;
    exercise: number;
    exercise_uuid: string;
    image: string;
    is_main: boolean;
    style: string;
    license: number;
    license_title: string;
    license_object_url: string;
    license_author: string;
    license_author_url: string;
    license_derivative_source_url: string;
    author_history: string[];
}

export interface Alias {
    id: number;
    uuid: string;
    alias: string;
}

export interface Note {
    id: number;
    uuid: string;
    translation: number;
    comment: string;
}

export interface Translation {
    id: number;
    uuid: string;
    name: string;
    exercise: number;
    description: string;
    created: string;
    language: number;
    aliases: Alias[];
    notes: Note[];
    license: number;
    license_title: string;
    license_object_url: string;
    license_author: string;
    license_author_url: string;
    license_derivative_source_url: string;
    author_history: string[];
}

export interface ExerciseVideo {
    id: number;
    uuid: string;
    exercise: number;
    video: string;
    is_main: boolean;
    size: number;
    duration: string;
    width: number;
    height: number;
    codec: string;
    codec_long: string;
    license: number;
    license_title: string;
    license_object_url: string;
    license_author: string;
    license_author_url: string;
    license_derivative_source_url: string;
    author_history: string[];
}