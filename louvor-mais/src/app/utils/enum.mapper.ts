export function getDescricaoTomMusica(tom: string): string {
    switch (tom) {
        case 'C': return 'C (Dó)';
        case 'C_SHARP_D_FLAT': return 'C#/Db (Dó#/Réb)';
        case 'D': return 'D (Ré)';
        case 'D_SHARP_E_FLAT': return 'D#/Eb (Ré#/Mib)';
        case 'E': return 'E (Mi)';
        case 'F': return 'F (Fá)';
        case 'F_SHARP_G_FLAT': return 'F#/Gb (Fá#/Solb)';
        case 'G': return 'G (Sol)';
        case 'G_SHARP_A_FLAT': return 'G#/Ab (Sol#/Láb)';
        case 'A': return 'A (Lá)';
        case 'A_SHARP_B_FLAT': return 'A#/Bb (Lá#/Sib)';
        case 'B': return 'B (Si)';

        // Menores
        case 'CM': return 'Cm (Dó menor)';
        case 'C_SHARP_D_FLAT_M': return 'C#m/Dbm (Dó#m/Réb m)';
        case 'DM': return 'Dm (Ré menor)';
        case 'D_SHARP_E_FLAT_M': return 'D#m/Ebm (Ré#m/Mib m)';
        case 'EM': return 'Em (Mi menor)';
        case 'FM': return 'Fm (Fá menor)';
        case 'F_SHARP_G_FLAT_M': return 'F#m/Gbm (Fá#m/Solb m)';
        case 'GM': return 'Gm (Sol menor)';
        case 'G_SHARP_A_FLAT_M': return 'G#m/Abm (Sol#m/Láb m)';
        case 'AM': return 'Am (Lá menor)';
        case 'A_SHARP_B_FLAT_M': return 'A#m/Bbm (Lá#m/Sib m)';
        case 'BM': return 'Bm (Si menor)';

        default: return 'Tom desconhecido';
    }
}

export function getDescricaoDificuldadeMusica(dificuldade: string): string {
    switch(dificuldade) {
        case 'FACIL': return 'Fácil';
        case 'MEDIO': return 'Médio';
        case 'DIFICIL': return 'Difícil';
        default: return 'Dificuldade desconhicida';
    }
}
