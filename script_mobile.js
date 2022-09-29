(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"defaultMenu":["fullscreen","mute","rotation"],"borderSize":0,"definitions": [{"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","borderSize":0,"data":{"name":"Instagram"},"borderRadius":0,"propagateClick":true,"shadowSpread":1,"width":65,"pressedFontColor":"#000000","textDecoration":"none","class":"Button","cursor":"hand","shadowColor":"#000000","paddingTop":0,"paddingLeft":0,"id":"Button_B6169904_821E_62FF_41D4_73F4E32F2289_mobile","fontFamily":"Cinzel Bold","rollOverShadow":false,"horizontalAlign":"center","rollOverBackgroundOpacity":0,"paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"iconWidth":0,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","pressedBackgroundColorRatios":[0],"layout":"horizontal","height":20,"verticalAlign":"middle","backgroundColor":["#000000"],"rollOverBackgroundColor":["#DB9B4D"],"click":"this.openLink(this.translate('LinkBehaviour_BFD17568_820A_2D36_41CA_ABFE4127FC64.source'), '_blank')","iconBeforeLabel":true,"fontColor":"#FFFFFF","gap":5,"fontSize":7,"mode":"push","label":trans('Button_B6169904_821E_62FF_41D4_73F4E32F2289_mobile.label'),"borderColor":"#000000","minHeight":1,"minWidth":1,"pressedBackgroundOpacity":0,"iconHeight":0,"backgroundColorRatios":[0],"fontStyle":"normal","shadow":false,"backgroundColorDirection":"vertical","shadowBlurRadius":7.5},{"overflow":"hidden","borderSize":0,"data":{"name":"Container42225"},"contentOpaque":false,"borderRadius":0,"propagateClick":false,"gap":5,"scrollBarMargin":1,"class":"Container","width":"79.167%","children":["this.Button_B6169904_821E_62FF_41D4_73F4E32F2289_mobile","this.Button_B76E36D1_821E_6F19_41C0_8025A0CFA34F_mobile","this.Button_B5345AEF_821E_2709_41D5_FD8912E34521_mobile","this.Button_B7DDB5B3_821E_6D19_41DB_4F74B00E8413_mobile"],"paddingTop":0,"paddingLeft":0,"id":"Container_B64AE56B_820F_ED09_41D3_B11D1775AFF5_mobile","horizontalAlign":"center","paddingBottom":0,"backgroundOpacity":0,"paddingRight":0,"bottom":"0%","layout":"horizontal","scrollBarVisible":"rollOver","toolTipHorizontalAlign":"center","height":"4.523%","verticalAlign":"middle","scrollBarColor":"#000000","minHeight":10,"left":"13.54%","scrollBarWidth":5,"shadow":false,"minWidth":10,"scrollBarOpacity":0.5},{"displayOriginPosition":{"yaw":-170.84,"hfov":165,"pitch":-90,"class":"RotationalCameraDisplayPosition","stereographicFactor":1},"class":"PanoramaCamera","automaticZoomSpeed":10,"idleSequence":"this.sequence_B429F911_8236_2519_41D6_5E9D99285818","initialSequence":"this.sequence_B429F911_8236_2519_41D6_5E9D99285818","initialPosition":{"yaw":-170.84,"hfov":100,"pitch":-7.53,"class":"PanoramaCameraPosition"},"timeToIdle":5000,"displayMovements":[{"duration":1000,"easing":"linear","class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"easing":"cubic_in_out","targetPitch":-7.53,"targetHfov":100}],"hoverFactor":0,"manualRotationSpeed":200,"manualZoomSpeed":4,"id":"panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127_camera"},{"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","borderSize":0,"data":{"name":"Whatsapp"},"borderRadius":0,"propagateClick":true,"shadowSpread":1,"width":65,"pressedFontColor":"#000000","textDecoration":"none","class":"Button","cursor":"hand","shadowColor":"#000000","paddingTop":0,"paddingLeft":0,"id":"Button_B5345AEF_821E_2709_41D5_FD8912E34521_mobile","fontFamily":"Cinzel Bold","rollOverShadow":false,"horizontalAlign":"center","rollOverBackgroundOpacity":0,"paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"iconWidth":0,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","pressedBackgroundColorRatios":[0],"layout":"horizontal","height":20,"verticalAlign":"middle","backgroundColor":["#000000"],"rollOverBackgroundColor":["#DB9B4D"],"click":"this.openLink(this.translate('LinkBehaviour_BFD26568_820A_2D36_41C0_CAE3C360B23E.source'), '_blank')","iconBeforeLabel":true,"fontColor":"#FFFFFF","gap":5,"fontSize":7,"mode":"push","label":trans('Button_B5345AEF_821E_2709_41D5_FD8912E34521_mobile.label'),"borderColor":"#000000","minHeight":1,"minWidth":1,"pressedBackgroundOpacity":0,"iconHeight":0,"backgroundColorRatios":[0],"fontStyle":"normal","shadow":false,"backgroundColorDirection":"vertical","shadowBlurRadius":7.5},{"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","borderSize":0,"data":{"name":"Facebook"},"borderRadius":0,"propagateClick":true,"shadowSpread":1,"width":65,"pressedFontColor":"#000000","textDecoration":"none","class":"Button","cursor":"hand","shadowColor":"#000000","paddingTop":0,"paddingLeft":0,"id":"Button_B76E36D1_821E_6F19_41C0_8025A0CFA34F_mobile","fontFamily":"Cinzel Bold","rollOverShadow":false,"horizontalAlign":"center","rollOverBackgroundOpacity":0,"paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"iconWidth":0,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","pressedBackgroundColorRatios":[0],"layout":"horizontal","height":20,"verticalAlign":"middle","backgroundColor":["#000000"],"rollOverBackgroundColor":["#DB9B4D"],"click":"this.openLink(this.translate('LinkBehaviour_BFD22568_820A_2D36_41C6_BA8ACC3A975F.source'), '_blank')","iconBeforeLabel":true,"fontColor":"#FFFFFF","gap":5,"fontSize":7,"mode":"push","label":trans('Button_B76E36D1_821E_6F19_41C0_8025A0CFA34F_mobile.label'),"borderColor":"#000000","minHeight":1,"minWidth":1,"pressedBackgroundOpacity":0,"iconHeight":0,"backgroundColorRatios":[0],"fontStyle":"normal","shadow":false,"backgroundColorDirection":"vertical","shadowBlurRadius":7.5},{"displayPlaybackBar":true,"clickAction":"play_pause","displayPlayOverlay":true,"viewerArea":"this.MainViewer_mobile","class":"VideoPlayer","id":"MainViewer_mobileVideoPlayer"},{"data":{"label":"Audio Clinica Odontologica Gama Final"},"loop":false,"audio":"this.audiores_BC3DC825_820A_2339_4191_94753F747366","autoplay":true,"class":"MediaAudio","id":"audio_B586F18D_820A_2509_41C1_9A00304F4438"},{"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","borderSize":0,"data":{"name":"Localiza\u00e7\u00e3o"},"borderRadius":0,"propagateClick":true,"shadowSpread":1,"width":65,"pressedFontColor":"#000000","textDecoration":"none","class":"Button","cursor":"hand","shadowColor":"#000000","paddingTop":0,"paddingLeft":0,"id":"Button_B7DDB5B3_821E_6D19_41DB_4F74B00E8413_mobile","fontFamily":"Cinzel Bold","rollOverShadow":false,"horizontalAlign":"center","rollOverBackgroundOpacity":0,"paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"iconWidth":0,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","pressedBackgroundColorRatios":[0],"layout":"horizontal","height":20,"verticalAlign":"middle","backgroundColor":["#000000"],"rollOverBackgroundColor":["#DB9B4D"],"click":"this.openLink(this.translate('LinkBehaviour_BFD3B568_820A_2D36_41BD_143AFF9BA23B.source'), '_blank')","iconBeforeLabel":true,"fontColor":"#FFFFFF","gap":5,"fontSize":7,"mode":"push","label":trans('Button_B7DDB5B3_821E_6D19_41DB_4F74B00E8413_mobile.label'),"borderColor":"#000000","minHeight":1,"minWidth":1,"pressedBackgroundOpacity":0,"iconHeight":0,"backgroundColorRatios":[0],"fontStyle":"normal","shadow":false,"backgroundColorDirection":"vertical","shadowBlurRadius":7.5},{"items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)","media":"this.video_B979FF99_820E_3D09_41D6_E2A8A0F3C529","player":"this.MainViewer_mobileVideoPlayer","class":"VideoPlayListItem","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_9B74A51B_8E7C_6972_41DE_E5660496A009, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9B74A51B_8E7C_6972_41DE_E5660496A009, 0)"}],"class":"PlayList","id":"playList_9B74A51B_8E7C_6972_41DE_E5660496A009"},{"aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer_mobile","displayPlaybackBar":true,"zoomEnabled":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"id":"MainViewer_mobilePanoramaPlayer"},{"class":"Panorama","vfov":180,"thumbnailUrl":"media/panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127_t.jpg","partial":false,"pitch":0,"overlays":["this.overlay_BACEEEF5_820A_FF1E_41D0_F901CD23C0AB"],"id":"panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127","label":trans('panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127.label'),"frames":[{"thumbnailUrl":"media/panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"tags":"ondemand","class":"TiledImageResourceLevel","height":2048,"url":"media/panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127_0/{face}/0/{row}_{column}.jpg","colCount":24,"rowCount":4},{"width":6144,"tags":"ondemand","class":"TiledImageResourceLevel","height":1024,"url":"media/panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127_0/{face}/1/{row}_{column}.jpg","colCount":12,"rowCount":2},{"width":3072,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","height":512,"url":"media/panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127_0/{face}/2/{row}_{column}.jpg","colCount":6,"rowCount":1},{"width":9216,"tags":"mobilevr","class":"TiledImageResourceLevel","height":1536,"url":"media/panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127_0/{face}/vr/0.jpg","colCount":6,"rowCount":1},{"width":12288,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","height":2048,"url":"media/panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127_0/{face}/vr2gen/0.jpg","colCount":6,"rowCount":1}],"class":"ImageResource"}}],"hfov":360,"data":{"label":"CL\u00cdNICA ODONTOL\u00d3GICA"},"hfovMax":130,"hfovMin":"100%"},{"items":[{"camera":"this.panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127_camera","media":"this.panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"borderSize":0,"data":{"name":"Button46351"},"borderRadius":0,"propagateClick":false,"width":20,"class":"IconButton","cursor":"hand","paddingTop":0,"paddingLeft":0,"id":"IconButton_B8A80C2E_820E_630A_41CD_3EB1C4B86E9A_mobile","horizontalAlign":"center","paddingBottom":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","paddingRight":0,"top":"25.04%","transparencyActive":true,"height":20,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_B8A80C2E_820E_630A_41CD_3EB1C4B86E9A_pressed.png","rollOverIconURL":"skin/IconButton_B8A80C2E_820E_630A_41CD_3EB1C4B86E9A_rollover.png","mode":"toggle","minHeight":0,"minWidth":0,"shadow":false,"iconURL":"skin/IconButton_B8A80C2E_820E_630A_41CD_3EB1C4B86E9A.png","right":"4.02%"},{"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"borderSize":0,"toolTipOpacity":1,"toolTipShadowColor":"#333138","subtitlesVerticalAlign":"bottom","propagateClick":false,"progressLeft":0,"subtitlesPaddingBottom":5,"subtitlesBottom":50,"subtitlesBackgroundOpacity":0.2,"class":"ViewerArea","subtitlesPaddingRight":5,"displayTooltipInTouchScreens":true,"playbackBarHeadShadowBlurRadius":1.5,"subtitlesPaddingLeft":5,"id":"MainViewer_mobile","progressBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"width":"100%","playbackBarHeadShadowHorizontalLength":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesBorderSize":0,"playbackBarHeadHeight":15,"subtitlesTextShadowOpacity":1,"playbackBarLeft":0,"toolTipFontStyle":"normal","progressBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","toolTipHorizontalAlign":"center","toolTipPaddingBottom":2,"surfaceReticleSelectionOpacity":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","toolTipPaddingRight":3,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColorRatios":[0],"toolTipDisplayTime":600,"vrPointerColor":"#FFFFFF","subtitlesTextDecoration":"none","playbackBarBackgroundOpacity":1,"progressBarOpacity":1,"vrPointerSelectionTime":2000,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderSize":0,"toolTipPaddingTop":2,"height":"100%","playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"surfaceReticleColor":"#FFFFFF","toolTipBorderSize":1,"playbackBarBorderRadius":0,"transitionDuration":500,"toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadShadow":true,"firstTransitionDuration":0,"progressBottom":0,"toolTipBorderColor":"#767676","playbackBarHeadShadowVerticalLength":0,"toolTipTextShadowOpacity":0,"toolTipShadowSpread":0,"playbackBarHeadOpacity":1,"shadow":false,"translationTransitionDuration":1000,"subtitlesFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","playbackBarOpacity":1,"toolTipFontWeight":"normal","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowBlurRadius":1,"borderRadius":0,"progressHeight":10,"playbackBarHeadBorderColor":"#000000","playbackBarProgressOpacity":1,"progressBackgroundColorRatios":[0],"subtitlesPaddingTop":5,"subtitlesTop":0,"toolTipShadowHorizontalLength":0,"paddingTop":0,"paddingLeft":0,"surfaceReticleOpacity":0.6,"progressRight":0,"subtitlesShadow":false,"paddingBottom":0,"toolTipTextShadowColor":"#000000","progressBarBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"progressOpacity":1,"progressBorderSize":0,"toolTipShadowBlurRadius":1,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","paddingRight":0,"toolTipShadowOpacity":1,"playbackBarBorderSize":0,"playbackBarBottom":5,"subtitlesOpacity":1,"subtitlesEnabled":true,"progressBarBorderColor":"#000000","progressBarBorderRadius":0,"displayTooltipInSurfaceSelection":true,"toolTipBorderRadius":1,"toolTipShadowVerticalLength":0,"doubleClickAction":"toggle_fullscreen","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","progressBarBorderSize":0,"transitionMode":"blending","subtitlesGap":0,"toolTipFontFamily":"Arial","playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarHeadWidth":6,"toolTipPaddingLeft":3,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","minHeight":25,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","subtitlesBackgroundColor":"#000000","minWidth":50,"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","progressBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","subtitlesFontSize":"3vmin","subtitlesTextShadowHorizontalLength":1,"progressBackgroundOpacity":1,"progressBorderRadius":0},{"video":"this.videores_B73A863F_820A_EF09_41DD_4DF2CEC86364","loop":false,"height":480,"width":854,"class":"Video","thumbnailUrl":"media/video_B979FF99_820E_3D09_41D6_E2A8A0F3C529_t.jpg","id":"video_B979FF99_820E_3D09_41D6_E2A8A0F3C529","label":trans('video_B979FF99_820E_3D09_41D6_E2A8A0F3C529.label'),"data":{"label":"Como limpar meu aparelho_480p"},"scaleMode":"fit_inside"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":5.31,"yawDelta":295,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_B429F911_8236_2519_41D6_5E9D99285818"},{"mp3Url":trans('audiores_BC3DC825_820A_2339_4191_94753F747366.mp3Url'),"class":"AudioResource","id":"audiores_BC3DC825_820A_2339_4191_94753F747366"},{"data":{"label":"Info Red 02"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"yaw":-158.35,"class":"HotspotPanoramaOverlayImage","hfov":4.42,"vfov":3.29,"data":{"label":"Info Red 02"},"verticalAlign":"middle","image":"this.AnimatedImageResource_9B6C63B4_8E7C_6946_41D5_E9AFD9351096","horizontalAlign":"center","pitch":4.22,"scaleMode":"fit_inside"}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_BAD21F59_820A_FD16_41C8_DF74FD95C712"],"id":"overlay_BACEEEF5_820A_FF1E_41D0_F901CD23C0AB"},{"height":480,"width":854,"levels":["this.videolevel_9B0DF143_8E7C_69C2_41C2_B0F9C499555D"],"class":"VideoResource","id":"videores_B73A863F_820A_EF09_41DD_4DF2CEC86364"},{"frameDuration":41,"frameCount":24,"levels":[{"height":468,"width":312,"url":"media/res_BB994DF3_820A_5D19_41D4_D138D65E1BFD_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","colCount":4,"rowCount":6,"id":"AnimatedImageResource_9B6C63B4_8E7C_6946_41D5_E9AFD9351096"},{"click":"this.setMediaBehaviour(this.playList_9B74A51B_8E7C_6972_41DE_E5660496A009, 0, this.panorama_BB0367E9_8236_ED09_41D1_19CB92B7B127, true); this.MainViewer_mobileVideoPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_BAD21F59_820A_FD16_41C8_DF74FD95C712"},{"width":854,"bitrate":921,"posterURL":trans('videolevel_9B0DF143_8E7C_69C2_41C2_B0F9C499555D.posterURL'),"url":trans('videolevel_9B0DF143_8E7C_69C2_41C2_B0F9C499555D.url'),"class":"VideoResourceLevel","height":480,"framerate":29.97,"type":"video/mp4","id":"videolevel_9B0DF143_8E7C_69C2_41C2_B0F9C499555D"}],"contentOpaque":false,"borderRadius":0,"propagateClick":false,"gap":10,"scrollBarMargin":2,"scrollBarColor":"#000000","class":"Player","width":"100%","paddingTop":0,"paddingLeft":0,"id":"rootPlayer","mouseWheelEnabled":true,"backgroundPreloadEnabled":true,"horizontalAlign":"left","paddingBottom":0,"vrPolyfillScale":0.75,"backgroundOpacity":1,"defaultVRPointer":"laser","paddingRight":0,"children":["this.MainViewer_mobile","this.Container_B64AE56B_820F_ED09_41D3_B11D1775AFF5_mobile","this.IconButton_B8A80C2E_820E_630A_41CD_3EB1C4B86E9A_mobile"],"toolTipHorizontalAlign":"center","layout":"absolute","scrollBarVisible":"rollOver","height":"100%","mediaActivationMode":"window","verticalAlign":"top","backgroundColor":["#FFFFFF"],"overflow":"hidden","mobileMipmappingEnabled":false,"desktopMipmappingEnabled":false,"buttonToggleMute":"this.IconButton_B8A80C2E_820E_630A_41CD_3EB1C4B86E9A_mobile","scripts":{"translate":TDV.Tour.Script.translate,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getKey":TDV.Tour.Script.getKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoForward":TDV.Tour.Script.historyGoForward,"unregisterKey":TDV.Tour.Script.unregisterKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openLink":TDV.Tour.Script.openLink,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"clone":TDV.Tour.Script.clone,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setValue":TDV.Tour.Script.setValue,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"init":TDV.Tour.Script.init,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isPanorama":TDV.Tour.Script.isPanorama,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playAudioList":TDV.Tour.Script.playAudioList,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlays":TDV.Tour.Script.getOverlays,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeJS":TDV.Tour.Script.executeJS,"textToSpeech":TDV.Tour.Script.textToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"quizStart":TDV.Tour.Script.quizStart,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"registerKey":TDV.Tour.Script.registerKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"initAnalytics":TDV.Tour.Script.initAnalytics,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cloneCamera":TDV.Tour.Script.cloneCamera,"getPixels":TDV.Tour.Script.getPixels,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"mixObject":TDV.Tour.Script.mixObject,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setLocale":TDV.Tour.Script.setLocale,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName},"minHeight":0,"minWidth":0,"downloadEnabled":true,"backgroundColorRatios":[0],"backgroundColorDirection":"vertical","scrollBarWidth":10,"start":"this.playAudioList([this.audio_B586F18D_820A_2509_41C1_9A00304F4438], true); this.init()","shadow":false,"left":352.4,"data":{"defaultLocale":"pt","name":"Player41094","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"rate":1}},"scrollBarOpacity":0.5};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Thu Sep 29 2022