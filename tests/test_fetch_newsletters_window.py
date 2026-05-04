import importlib.util
import tempfile
import unittest
from datetime import datetime, timezone
from pathlib import Path


def load_module():
    path = Path(__file__).resolve().parents[1] / "scripts" / "fetch-newsletters.py"
    spec = importlib.util.spec_from_file_location("fetch_newsletters", path)
    module = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(module)
    return module


class NewsletterWindowTest(unittest.TestCase):
    def test_collection_window_starts_at_previous_digest_generated_at(self):
        fn = load_module()
        with tempfile.TemporaryDirectory() as td:
            fn.NEWSLETTER_DIR = Path(td)
            (Path(td) / "2026-05-03.json").write_text(
                '{"date":"2026-05-03","generated_at":"2026-05-03T00:46:09+00:00"}',
                encoding="utf-8",
            )

            now = datetime(2026, 5, 4, 0, 46, 13, tzinfo=timezone.utc)
            start, end, marker = fn.collection_window("2026-05-04", now=now)

        self.assertEqual(start.isoformat(), "2026-05-03T00:46:09+00:00")
        self.assertEqual(end.isoformat(), "2026-05-04T00:46:13+00:00")
        self.assertEqual(marker, "previous_digest_generated_at")

    def test_collection_window_falls_back_to_calendar_day_without_previous_marker(self):
        fn = load_module()
        with tempfile.TemporaryDirectory() as td:
            fn.NEWSLETTER_DIR = Path(td)
            now = datetime(2026, 5, 4, 0, 46, 13, tzinfo=timezone.utc)
            start, end, marker = fn.collection_window("2026-05-04", now=now)

        self.assertEqual(start.isoformat(), "2026-05-04T00:00:00+00:00")
        self.assertEqual(end.isoformat(), "2026-05-04T00:46:13+00:00")
        self.assertEqual(marker, "calendar_day_fallback")


if __name__ == "__main__":
    unittest.main()
