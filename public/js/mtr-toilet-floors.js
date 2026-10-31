/**
 * MTR in-station public toilets: which level, plus a short location note.
 *
 * Source (reference only, may change):
 * https://www.mtr.com.hk/ch/customer/services/nearbytoilet.html
 * captured 2026-10-31. Nearby malls are NOT treated as station toilets.
 *
 * Shape of each place (also accepted from API facilities.toiletFloors):
 *   level: 'concourse' | 'platform' | 'interchange'
 *   floor: 'L1' | 'G' | 'U2' | '' 
 *   exit:  'A' | ''
 *   area:  'paid' | 'unpaid' | 'mixed' | ''
 *   noteZh / noteEn, alertZh / alertEn, closed
 *
 * Priority: non-empty facilities.toiletFloors, then this seed, then yes/no.
 * facilities.toiletFloorsVerified === false → show「資料待核實」.
 * Empty toiletFloors does not block the seed.
 */
(function () {
    const paid = (exit) => ({ level: 'concourse', area: 'paid', exit: exit || '' });
    const concourse = (extra) => Object.assign({ level: 'concourse', area: 'paid', exit: '' }, extra || {});

    window.MTR_TOILET_FLOOR_SOURCE = 'https://www.mtr.com.hk/ch/customer/services/nearbytoilet.html';

    window.MTR_TOILET_FLOORS = {
        WHA: { verified: true, places: [paid('D')] },
        HOM: { verified: true, places: [paid('B')] },
        YMT: { verified: true, places: [paid('C')] },
        MOK: { verified: true, places: [paid('A')] },
        PRE: { verified: true, places: [paid('A')] },
        KOT: { verified: true, places: [concourse({
            level: 'interchange',
            noteZh: '東鐵綫北面大堂',
            noteEn: 'East Rail Line north concourse',
            alertZh: '無障礙洗手間翻新暫停',
            alertEn: 'Accessible toilet closed for refurbishment'
        })] },
        DIH: { verified: true, places: [concourse({
            level: 'interchange',
            noteZh: '屯馬綫大堂',
            noteEn: 'Tuen Ma Line concourse'
        })] },
        NTK: { verified: true, places: [paid()] },
        YAT: { verified: true, places: [paid()] },
        TIK: { verified: true, places: [paid()] },
        CEN: { verified: true, places: [concourse({ floor: 'L2', exit: 'A' })] },
        ADM: { verified: true, places: [
            concourse({ floor: 'L1', exit: 'F' }),
            concourse({ floor: 'L5' })
        ] },
        TST: { verified: true, places: [concourse({ exit: 'E', area: 'unpaid' })] },
        MEF: { verified: true, places: [concourse({
            level: 'interchange',
            noteZh: '屯馬綫大堂',
            noteEn: 'Tuen Ma Line concourse'
        })] },
        LAK: { verified: true, places: [paid()] },
        KET: { verified: true, places: [concourse({ exit: 'A', area: 'unpaid' })] },
        HKU: { verified: true, places: [paid('B')] },
        SYP: { verified: true, places: [paid('B')] },
        SHW: { verified: true, places: [paid('E')] },
        NOP: { verified: true, places: [paid('B')] },
        QUB: { verified: true, places: [paid('A')] },
        HOK: { verified: true, places: [
            concourse({ floor: 'G', exit: 'E', area: 'unpaid' }),
            concourse({ floor: 'L1', area: 'unpaid' }),
            concourse({ floor: 'L2', area: 'unpaid' })
        ] },
        KOW: { verified: true, places: [
            concourse({ floor: 'G', area: 'unpaid' }),
            concourse({ floor: 'L2', area: 'unpaid' }),
            concourse({
                level: 'platform',
                floor: 'L2',
                area: '',
                closed: true,
                noteZh: '1號月台往機場／博覽館、近車尾',
                noteEn: 'Platform 1 towards Airport / AsiaWorld-Expo, near the rear',
                alertZh: '翻新暫停',
                alertEn: 'Closed for refurbishment'
            })
        ] },
        NAM: { verified: true, places: [paid('A')] },
        TSY: { verified: true, places: [
            concourse({ floor: 'U4', area: 'unpaid' }),
            concourse({
                floor: 'U2',
                area: 'unpaid',
                closed: true,
                alertZh: '翻新暫停',
                alertEn: 'Closed for refurbishment'
            })
        ] },
        SUN: { verified: true, places: [concourse({
            level: 'platform',
            area: '',
            noteZh: '迪士尼綫往迪士尼 3號月台',
            noteEn: 'Disneyland Resort Line Platform 3 towards Disneyland Resort'
        })] },
        DIS: { verified: true, places: [concourse({
            level: 'platform',
            area: '',
            noteZh: '往欣澳 1號月台',
            noteEn: 'Platform 1 towards Sunny Bay'
        })] },
        WKS: { verified: true, places: [paid()] },
        MOS: { verified: true, places: [paid()] },
        HEO: { verified: true, places: [paid()] },
        TSH: { verified: true, places: [paid()] },
        SHM: { verified: true, places: [paid()] },
        CIO: { verified: true, places: [paid()] },
        STW: { verified: true, places: [paid()] },
        CKT: { verified: true, places: [paid()] },
        TAW: { verified: true, places: [paid('B')] },
        HIK: { verified: true, places: [paid()] },
        KAT: { verified: true, places: [paid('C')] },
        SUW: { verified: true, places: [paid('D')] },
        TKW: { verified: true, places: [paid('B')] },
        HUH: { verified: true, places: [
            concourse({ floor: 'U2', area: 'unpaid' }),
            concourse({ floor: 'U3', area: 'unpaid' }),
            concourse({ level: 'platform', area: '', noteZh: '屯馬綫', noteEn: 'Tuen Ma Line' })
        ] },
        ETS: { verified: true, places: [paid()] },
        AUS: { verified: true, places: [paid('C')] },
        TWW: { verified: true, places: [paid()] },
        KSR: { verified: true, places: [paid()] },
        YUL: { verified: true, places: [paid()] },
        LOP: { verified: true, places: [paid()] },
        TIS: { verified: true, places: [paid('C')] },
        SIK: { verified: true, places: [paid('A')] },
        TUM: { verified: true, places: [paid('F')] },
        EXC: { verified: true, places: [paid('B')] },
        MKK: { verified: true, places: [paid('C')] },
        SHT: { verified: true, places: [paid()] },
        FOT: { verified: true, places: [paid('A')] },
        UNI: { verified: true, places: [paid('B')] },
        TAP: { verified: true, places: [paid('A')] },
        TWO: { verified: true, places: [paid('A')] },
        FAN: { verified: true, places: [paid()] },
        SHS: { verified: true, places: [paid()] },
        LOW: { verified: true, places: [
            concourse({ level: 'platform', area: 'mixed' }),
            concourse({ area: 'mixed', noteZh: '抵港大堂', noteEn: 'Arrival concourse' })
        ] },
        LMC: { verified: true, places: [
            concourse({ area: 'paid', noteZh: '離港大堂', noteEn: 'Departure concourse' }),
            concourse({ area: 'unpaid', noteZh: '抵港大堂', noteEn: 'Arrival concourse' })
        ] },
        OCO: { verified: true, places: [paid()] },
        WCH: { verified: true, places: [paid()] },
        LET: { verified: true, places: [paid()] },
        SOH: { verified: true, places: [paid()] }
    };

    const ALIAS = { EXX: 'EXC', OCP: 'OCO' };

    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function levelWord(level, isEn) {
        const map = {
            concourse: ['大堂', 'Concourse'],
            platform: ['月台', 'Platform'],
            interchange: ['轉車層', 'Interchange']
        };
        const pair = map[level] || map.concourse;
        return isEn ? pair[1] : pair[0];
    }

    function areaWord(area, isEn) {
        if (area === 'paid') return isEn ? 'Paid area' : '已付費區';
        if (area === 'unpaid') return isEn ? 'Unpaid area' : '閘外';
        if (area === 'mixed') return isEn ? 'Paid and unpaid' : '已付費及閘外';
        return '';
    }

    function placeLine(p, isEn) {
        const bits = [];
        let head = levelWord(p.level || 'concourse', isEn);
        if (p.floor) head += ' ' + p.floor;
        bits.push(head);
        const note = isEn ? (p.noteEn || p.note || '') : (p.noteZh || p.note || '');
        if (note) bits.push(note);
        if (p.exit) bits.push(isEn ? ('Exit ' + p.exit) : (p.exit + '出口'));
        const area = areaWord(p.area, isEn);
        if (area) bits.push(area);
        const alert = isEn ? (p.alertEn || '') : (p.alertZh || '');
        if (p.closed) bits.push(alert || (isEn ? 'Closed for now' : '暫停開放'));
        else if (alert) bits.push(alert);
        return bits.filter(Boolean).join(' · ');
    }

    function summary(places, isEn) {
        const order = ['concourse', 'interchange', 'platform'];
        const seen = [];
        places.forEach((p) => {
            const lv = p.level || 'concourse';
            if (seen.indexOf(lv) === -1) seen.push(lv);
        });
        seen.sort((a, b) => {
            const ia = order.indexOf(a);
            const ib = order.indexOf(b);
            return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
        });
        return seen.map((lv) => levelWord(lv, isEn)).join(isEn ? ' / ' : '／');
    }

    window.resolveMtrToiletFloors = function (fac, staCode) {
        const apiPlaces = fac && Array.isArray(fac.toiletFloors)
            ? fac.toiletFloors.filter((p) => p && (p.level || p.floor || p.noteZh || p.noteEn || p.note || p.exit))
            : [];
        if (apiPlaces.length) {
            return { places: apiPlaces, verified: fac.toiletFloorsVerified !== false };
        }
        const raw = String(staCode || (fac && (fac.stationId || fac.station_id)) || '').toUpperCase();
        const key = ALIAS[raw] || raw;
        const seed = key && window.MTR_TOILET_FLOORS[key];
        if (seed && Array.isArray(seed.places) && seed.places.length) {
            return { places: seed.places, verified: seed.verified !== false };
        }
        return null;
    };

    window.renderMtrFacilitiesHtml = function (fac, dict, lang, amenities, staCode) {
        const isEn = lang === 'en';
        const items = [];
        const addBool = (val, icon, yesZh, noZh, yesEn, noEn) => {
            if (val === true) items.push(`<span class="mtr-fac-chip on"><i class="ph-bold ${icon}"></i> ${isEn ? yesEn : yesZh}</span>`);
            else if (val === false) items.push(`<span class="mtr-fac-chip off"><i class="ph-bold ${icon}"></i> ${isEn ? noEn : noZh}</span>`);
        };
        const poi = (Array.isArray(amenities) ? amenities : []).filter(a => a.distM == null || a.distM <= 180);
        const hasOsmToilet = poi.some(a => a.typeId === 'toilet' || a.type === 'toilet');
        const floorInfo = window.resolveMtrToiletFloors(fac, staCode);
        if (floorInfo) {
            const sum = summary(floorInfo.places, isEn);
            const pending = floorInfo.verified === false ? (isEn ? ' · Not yet verified' : ' · 資料待核實') : '';
            items.push(`<span class="mtr-fac-chip on"><i class="ph-bold ph-toilet"></i> ${isEn ? 'Toilet' : '廁所'} · ${esc(sum)}${pending}</span>`);
            const lines = floorInfo.places.map((p) => {
                const cls = p.closed ? ' mtr-toilet-line closed' : ' mtr-toilet-line';
                return `<div class="${cls.trim()}">${esc(placeLine(p, isEn))}</div>`;
            }).join('');
            items.push(`<div class="mtr-toilet-loc">${lines}</div>`);
        } else {
            const toilet = (fac && fac.toilet === true) || hasOsmToilet ? true : (fac && fac.toilet);
            addBool(toilet, 'ph-toilet', '廁所 · 有', '廁所 · 無', 'Toilet · Yes', 'Toilet · No');
        }
        addBool(fac && fac.lift, 'ph-elevator', '升降機 · 有', '升降機 · 無', 'Lift · Yes', 'Lift · No');
        addBool(fac && fac.wheelchair, 'ph-wheelchair', '無障礙 · 有', '無障礙 · 無', 'Accessible · Yes', 'Accessible · No');

        const atms = poi.filter(a => a.typeId === 'atm' || a.typeId === 'bank');
        if (atms.length) {
            const names = [...new Set(atms.map(a => a.brand || a.name).filter(Boolean))].slice(0, 4);
            const label = isEn ? `ATM / Bank · ${atms.length}` : `櫃員機／銀行 · ${atms.length} 處`;
            items.push(`<span class="mtr-fac-chip on"><i class="ph-bold ph-credit-card"></i> ${label}${names.length ? ` · ${esc(names.join('、'))}` : ''}</span>`);
        } else if (fac && fac.atm === false) {
            items.push(`<span class="mtr-fac-chip off"><i class="ph-bold ph-credit-card"></i> ${isEn ? 'No ATM nearby' : '附近暫無櫃員機'}</span>`);
        }

        const shopTypes = new Set(['convenience', 'supermarket', 'mall', 'cafe', 'bakery', 'pharmacy']);
        const shops = poi.filter(a => shopTypes.has(a.typeId));
        const shopChips = [...new Map(shops.map(s => {
            const nm = s.brand || s.name || '';
            return [nm, s];
        })).values()].filter(s => s.brand || s.name).slice(0, 8);

        let html = items.length ? `<div class="hmw-fac" aria-label="facilities">${items.join('')}</div>` : '';
        if (shopChips.length) {
            html += `<div style="font-size:11px;font-weight:900;color:#94A3B8;margin:10px 0 6px;">${isEn ? 'Shops nearby (in / around station)' : '車站／出閘附近商店'}</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">${shopChips.map(s => {
                const nm = s.brand || s.name;
                const d = s.distM != null ? ` ${s.distM}m` : '';
                return `<span class="mtr-shop-chip">${esc(nm)}${d}</span>`;
            }).join('')}</div>`;
        }
        if (fac && fac.note && (fac.toilet != null || floorInfo)) {
            html += `<div style="font-size:11px;font-weight:800;color:#94A3B8;margin-top:8px;line-height:1.4;">${esc(fac.note)}</div>`;
        }
        if (!html) html = `<div style="font-size:12px;font-weight:800;color:#94A3B8;">${isEn ? 'No confirmed facility data for this station.' : '呢個站暫時未有核實設施資料。'}</div>`;
        return html;
    };
})();
