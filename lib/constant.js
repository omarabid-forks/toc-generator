"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_NAME = 'TOC Generator';
exports.ACTION_OWNER = 'technote-space';
exports.ACTION_REPO = 'toc-generator';
exports.TARGET_EVENTS = {
    'push': [
        (context) => /^refs\/heads\//.test(context.ref),
    ],
    'pull_request': [
        'opened',
        'reopened',
        'synchronize',
        'labeled',
        'unlabeled',
        'closed',
    ],
};